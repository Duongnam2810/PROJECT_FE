import { CommonService } from './../../../shared/service/common.service';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, Observable, throwError, tap } from 'rxjs';
import { ACCESS_TOKEN, TokenService } from './token.service';
import { SUCCESS_RESPONSE } from 'src/app/shared/service/constants';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthApiService, AuthenticateRequest, TokenForRefresh } from 'src/app/shared/service/auth.service';

export interface IUserDataToken {
  id: string;
  fullName: string;
  organizationid: string;
  organization: string;
  refreshToken: string;
  userType: number;
}
@Injectable({
  providedIn: "root",
})
export class AuthService {
  redirectUrl = "";
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    null
  );

  private jwtHelper: JwtHelperService;
  private token?: string;
  constructor(
    private tokenService: TokenService,
    private commonService: CommonService,
    private _service: AuthApiService,
    private router: Router
  ) {
    this.loadToken();
    this.loadSavedAuthData();
    this.jwtHelper = new JwtHelperService();
    this.jwtHelper.tokenGetter = () => this.token;
  }

  loadToken() {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(loginData: any, state: string): Observable<any> {
    this.tokenService.removeToken();
    // this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set("username", loginData.username)
      .set("password", loginData.password)
      .set("grant_type", "password");

    const userLogin = new AuthenticateRequest({
      username: loginData.username,
      password: loginData.password,
    });
    // this.menuService.resetMenuWhenLogin();
    return this._service
      .ballApiV1AuthAuthenticate(userLogin)
      .pipe(
        tap((res) => {
          if (res.data) {
            this.tokenService.saveToken(res.data.jwtToken);
            this.tokenService.saveMenu(res.data.lstMenu);
            this.token = res.data.jwtToken;
            localStorage.setItem("Avatar", res.data.avatar);
            const usInfor: IUserDataToken = {
              id: res.data.id,
              fullName: res.data.fullName,
              organization: res.data.organization,
              organizationid: res.data.organizationId,
              refreshToken: res.data.refreshToken,
              userType: res.data.userType,
              // menu: res.data.lstMenu,
            };
            this.tokenService.setUserInfo(
              usInfor,
              this.jwtHelper.getTokenExpirationDate(res.data.jwtToken)
            );
            let stateRouter = "/dashboard/default";
            if (state) {
              stateRouter = "/" + state + stateRouter;
            }
            this.router.navigate([stateRouter]).then();
          } else {
            this.commonService.toastrWarning(res.message);
          }
        }),
        catchError(AuthService.handleError)
      );
  }

  private loadSavedAuthData(): void {
    const tokenString = this.getSavedAuthData();
    this.setAuthData(tokenString);
  }

  private getSavedAuthData() {
    if (!localStorage) return null;
    return this.tokenService.getToken();
  }

  private setAuthData(tokenString: string): void {
    this.token = tokenString;
  }

  refreshToken(tag: string = null): Observable<any> {
    const body = new TokenForRefresh({
      refreshToken: tag,
      // token: this.tokenService.getToken()
    });
    return this._service.ballApiV1AuthRefreshToken(body).pipe(
      tap((res) => {
        if (res.code === SUCCESS_RESPONSE) {
          this.tokenService.removeToken();
          this.tokenService.saveToken(res.data.jwtToken);
        }
      }),
      catchError(AuthService.handleError)
    );
  }

  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeCookie();
    
  }

  register(data: any): Observable<any> {
    // return this.http.post<any>(API_URL + 'oauth/signup', data)
    //   .pipe(
    //     tap(_ => AuthService.log('register')),
    //     catchError(AuthService.handleError)
    //   );
    return null;
  }

  secured(): Observable<any> {
    // return this.http.get<any>(API_URL + 'secret')
    //   .pipe(catchError(AuthService.handleError));
    return null;
  }

  checkTokenExpired(): boolean {
    const dt = this.tokenService.getCookieExpired();
    if (dt === null || dt < new Date()) {
      this.router.navigate(["/auth/login"]).then((_) => false);
      return true;
    }
    return false;
  }

  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError("Something bad happened; please try again later.");
  }

}
