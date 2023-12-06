import { Injectable } from "@angular/core";
import {
  Router, RouterStateSnapshot,
} from "@angular/router";
import { CookieService } from "ngx-cookie";
import { AuthService } from "./auth.service";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private _cookieService: CookieService
  ) {}

  user: any;
  canActivate(state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    this.user =
      Object.keys(this._cookieService.getAll()).length > 0
        ? JSON.parse(this._cookieService.getAll()?.user_info)
        : null;
    if (!this.user || Object.keys(this.user).length === 0) {
      this.router.navigate(["/auth/login"]).then((_) => false);
    }
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    const dt = this.tokenService.getCookieExpired();
    if (dt !== null || dt !== undefined || dt > new Date()) {
      return true;
    }
    this.authService.redirectUrl = url;
    this.router.navigate(["/auth/login"]).then((_) => false);
  }
}
