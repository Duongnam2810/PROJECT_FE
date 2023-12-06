import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { throwError } from "rxjs";
import { catchError, finalize, map } from "rxjs/operators";
import { AuthService } from "../auth.service";
import { TokenService } from "../token.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
  ) {}

  pendingRequestsCount = 0;

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    this.pendingRequestsCount++;
    const token = this.tokenService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + token,
        },
      });
    }

    request = request.clone({
      headers: request.headers.set("Accept", "application/json"),
    });

    // if (request.method === "GET") {
    //   if (request.url.indexOf("?") > 0) {
    //     let encriptURL = request.url.substr(0, request.url.indexOf("?") + 1) +
    //       this.cryptService.encryptUsingAES256(request.url.substr(request.url.indexOf("?") + 1, request.url.length));
    //     const cloneReq = request.clone({
    //       url: encriptURL
    //     });
    //     // return next.handle(cloneReq);
    //   }
    //   // return next.handle(request);
    // } else { //FIXME: neu loi thi can checl lai method truyen len la gi POST | PUT | DELETE | PATCH 
    //   if (request.body || request.body.length > 0) {
    //     const cloneReq = request.clone({
    //       body: this.cryptService.encryptUsingAES256(request.body)
    //     });
    //     return next.handle(cloneReq);
    //   }
    //   let data = request.body as FormData;
    //   // return next.handle(request);
    // }


    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        // console.log(error.error.error);
        if (error.status === 401) {
          if (error.error.error === "invalid_token") {
            this.authService.refreshToken().subscribe(() => {
              location.reload();
            });
          } else {
            this.router.navigate(["auth/login"]).then(
              (_) => {}
              // console.log('redirect to login')
            );
          }
        }
        return throwError(error);
      }),
      finalize(() => {
        this.pendingRequestsCount--;
        if (this.pendingRequestsCount === 0) {
        }
      })
    );
  }
}
