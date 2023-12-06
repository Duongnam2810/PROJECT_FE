import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { ERROR_NOTICE, HEIGHT_DIALOG, SUCCESS_NOTICE, SUCCESS_RESPONSE, TITLE_NOTICE, WARNING_NOTICE, WIDTH_DIALOG } from './constants';
import { DatePipe } from '@angular/common';
import { TokenService } from 'src/app/components/auth/auth.service/token.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MENU } from '../../components/auth/auth.service/token.service';
import { BallApiService } from './ball.service';
export class RoleMenuModel {
  isView: boolean;
  isAdd: boolean;
  isEdit: boolean;
  isDelete: boolean;
}
export class RoleFunction {
  function: string;
  id: string;
}
@Injectable({
  providedIn: "root",
})
export class CommonService {
  roleMenu: RoleFunction[] = [];
  constructor(
    private _api: BallApiService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  role: any;

  lstMenu: [] = [];
  accesslist(id: string) {
    const lstMenu = JSON.parse(localStorage.getItem(MENU));
    let menu: RoleFunction = new RoleFunction();
    lstMenu.forEach((element) => {
      const item: RoleFunction = new RoleFunction();
      item.function = element.function;
      item.id = element.id;
      this.roleMenu.push(item);
      if (element.state === this.router.routerState.snapshot.url) {
        menu = this.roleMenu.find((c) => c.id === element.id);
      }
    });
    return menu?.function.includes(id);
  }

  getUserInfo() {
    return this.tokenService.getUserInfo();
  }
  getUser() {
    return this.tokenService.getUserOjb();
  }

  async getDiaban() {
    // if (
    //   !localStorage.getItem("lstTinh") ||
    //   localStorage.getItem("lstTinh") !== "[]"
    // ) {
    //   let lstTinh = await this.apiDiaban(0).then((data) => {
    //     localStorage.setItem("lstTinh", JSON.stringify(data));
    //   });
    // }
    // if (
    //   !localStorage.getItem("lstHuyen") ||
    //   localStorage.getItem("lstHuyen") !== "[]"
    // ) {
    //   let lstHuyen = await this.apiDiaban(1).then((data) => {
    //     localStorage.setItem("lstHuyen", JSON.stringify(data));
    //   });
    // }
    // if (
    //   !localStorage.getItem("lstXa") ||
    //   localStorage.getItem("lstXa") !== "[]"
    // ) {
    //   let lstXa = await this.apiDiaban(2).then((data) => {
    //     localStorage.setItem("lstXa", JSON.stringify(data));
    //   });
    // }

    // if (
    //   !localStorage.getItem("lstThon") ||
    //   localStorage.getItem("lstThon") !== "[]"
    // ) {
    //   let lstThon = await this.apiDiaban(4).then((data) => {
    //     localStorage.setItem("lstThon", JSON.stringify(data));
    //   });
    // }
  }

  // async apiDiaban(type: number): Promise<SysdiabanModel[]> {
  //   let a = await this.qthtApiSevice
  //     .appQthtApiV1SysdiabanMGetBytypeSysdiaban(type)
  //     .toPromise();
  //   if (a.code === SUCCESS_RESPONSE) {
  //     return a.data;
  //   }
  //   return [];
  // }

  durationDefault = 3000;
  toastrWarning(message: any, duration?: number, title?: string) {
    this.toastrService.warning(
      message ?? WARNING_NOTICE,
      title ?? TITLE_NOTICE,
      {
        timeOut: duration ?? this.durationDefault,
      }
    );
  }

  toastrSuccess(message: any, duration?: number, title?: string) {
    this.toastrService.success(
      message ?? SUCCESS_NOTICE,
      title ?? TITLE_NOTICE,
      {
        timeOut: duration ?? this.durationDefault,
      }
    );
  }

  toastrError(message: string, duration?: number, title?: string) {
    this.toastrService.error(message ?? ERROR_NOTICE, title ?? TITLE_NOTICE, {
      timeOut: duration ?? this.durationDefault,
    });
  }

  toastrInfo(message: string, duration?: number, title?: string) {
    this.toastrService.info(message, title ?? TITLE_NOTICE, {
      timeOut: duration ?? this.durationDefault,
    });
  }

  toastrShow(message: string, duration?: number, title?: string) {
    this.toastrService.show(message, title ?? TITLE_NOTICE, {
      timeOut: duration ?? this.durationDefault,
    });
  }
}

@Pipe({
  name: "pipeDate",
})
export class ConvertDatePipe implements PipeTransform {
  //#region CONVERT_DATE

  convertStringToDateImportExcel(target: string): Date {
    if (target) {
      const array = target.split("/");
      if (array.length === 3)
        return new Date(array[2] + "-" + array[1] + "-" + array[0]);
    }
    return null;
  }

  transform(value: any) {
    const datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, "yyyy-MM-dd");
    return value;
  }
  transformCustom(value: any) {
    const datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, "yyyy-MM-dd HH:mm");
    return value;
  }
  transformExport(value: any) {
    const datePipe = new DatePipe("en-US");
    value = datePipe.transform(value, "dd/MM/yyyy");
    return value;
  }

  convertDateToString(target: Date): string {
    if (target) {
      return this.transform(target.toString());
    }
    return null;
  }
  convertStringToDateString(target: string): string {
    if (target) {
      if (target.length === 8) {
        const year = target.substr(0, 4);
        const month = target.substr(4, 2);
        const day = target.substr(6, 2);
        return day + "/" + month + "/" + year;
      } else if (target.length === 10) {
        const year = target.substr(0, 4);
        const month = target.substr(5, 2);
        const day = target.substr(8, 2);
        return day + "/" + month + "/" + year;
      }
      return target;
    }
  }
  convertStringToDate(target: string): Date {
    if (target && target.length === 8) {
      const year = +target.substr(0, 4);
      const month = +target.substr(4, 2);
      const day = +target.substr(6, 2);
      return new Date(year, month, day);
    }
    return null;
  }

  convertStringVnToDate(target: string): Date {
    if (target && target.length === 10) {
      const year = +target.substr(6, 4);
      const month = +target.substr(3, 2);
      const day = +target.substr(0, 2);
      return new Date(year, month, day);
    }
    return null;
  }

  convertStringToFormatInput(target: string): string {
    if (target && target.length === 8) {
      const year = target.substr(0, 4);
      const month = target.substr(4, 2);
      const day = target.substr(6, 2);
      return year + "-" + month + "-" + day;
    }
    return target;
  }

  convertStringddMMyyyyToFormatTextVN(target: string) {
    if (target && target.length === 8) {
      const year = target.substr(0, 4);
      const month = target.substr(4, 2);
      const day = target.substr(6, 2);
      return "Ngày " + day + " tháng " + month + " năm " + year;
    }
    return target;
  }

  convertStringDisplayToDateString(target: string) {
    if (target && target.length === 10) {
      const year = target.substr(0, 4);
      const month = target.substr(5, 2);
      const day = target.substr(8, 2);
      return year + month + day;
    }
    return target;
  }
  //#endregion
}
