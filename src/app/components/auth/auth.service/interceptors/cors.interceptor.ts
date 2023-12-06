import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class CorsHttpInterceptor implements HttpInterceptor {
  constructor() {}

  headers = {
    "Access-Control-Allow-Origin": "*",
  };

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const corsReq = req.clone({ setHeaders: this.headers });

    // send the newly created request
    return next.handle(corsReq);
  }
}
