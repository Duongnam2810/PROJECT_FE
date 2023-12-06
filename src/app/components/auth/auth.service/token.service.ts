import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, Observable, of, tap } from 'rxjs';
import { SUCCESS_RESPONSE } from 'src/app/shared/service/constants';
import { IUserDataToken } from './auth.service';
import { CookieService } from 'ngx-cookie';
import { AuthApiService, TokenForRefresh } from 'src/app/shared/service/auth.service';

export const ACCESS_TOKEN = "access_token";
const EXPIRED_TOKEN = "expire_token";
const USER_INFO = "user_info";
const PROJECT_INVEST = "project_invest";
export const MENU = "menu";
export const UNIT = "unit";

@Injectable({
  providedIn: "root",
})
export class TokenService {
  constructor(
    private cookieService: CookieService,
    private _service: AuthApiService
  ) {}

  setCookieExpired(expired: Date) {
    this.cookieService.put(EXPIRED_TOKEN, expired.toString(), {
      expires: expired,
    });
  }

  getCookieExpired(): Date {
    const dt = this.cookieService.get(EXPIRED_TOKEN);
    if (dt === null || dt === undefined) {
      return null;
    }
    return new Date(dt);
  }

  setUserInfo(userInfo: IUserDataToken, timeExpire: Date) {
    this.cookieService.putObject(USER_INFO, userInfo, { expires: timeExpire });
  }

  getUserInfo(): Observable<IUserDataToken> {
    const us = this.cookieService.getObject(USER_INFO);
    if (us === null || us === undefined) {
      return of(null);
    }
    return of(us as IUserDataToken);
  }
  getUserOjb() {
    const userd = this.cookieService.get(USER_INFO).toString();

    return JSON.parse(userd);
  }
  removeCookie() {
    this.cookieService.removeAll();
  }

  getToken(): string {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  saveToken(token): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  saveUnit(unit): void {
    localStorage.setItem(UNIT, JSON.stringify(unit));
  }

  saveMenu(menu): void {
    localStorage.setItem(MENU, JSON.stringify(menu));
  }

  removeToken(): void {
    localStorage.clear();
  }

  getProjectInvest(): string {
    return localStorage.getItem(PROJECT_INVEST);
  }

  saveProjectInvest(project): Observable<any> {
    localStorage.setItem(PROJECT_INVEST, project);
    const body = new TokenForRefresh({
      refreshToken: project,
      // token: this.getToken()
    });
    return this._service.ballApiV1AuthRefreshToken(body).pipe(
      tap((res) => {
        if (res.code === SUCCESS_RESPONSE) {
          this.removeToken();
          this.saveToken(res.data.jwtToken);
        }
      }),
      catchError(TokenService.handleError)
    );
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
