import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  BallApiService,
} from "src/app/shared/service/ball.service";

@Injectable({
  providedIn: "root",
})
export class CateTargetService {
  constructor(private _service: BallApiService) {}

  // paging(
  //   body: PageDmTarget | undefined,
  // ): Observable<ItemDmTargetIEnumerablePageModelViewApiResponse> {
  //   return this._service.ballApiV1DmTargetPostPagingDmTarget(body);
  // }

  // insert(body: ItemDmTarget | undefined): Observable<ApiResponse> {
  //   return this._service.ballApiV1DmTargetPostInsertDmTarget(body);
  // }

  // update(body: ItemDmTarget | undefined): Observable<ApiResponse> {
  //   return this._service.ballApiV1DmTargetPostUpdateDmTarget(body);
  // }

  // delete(_Id: string): Observable<ApiResponse> {
  //   return this._service.ballApiV1DmTargetPostDeleteDmTarget(_Id);
  // }

  // getOne(_Id: string): Observable<ItemDmTargetApiResponse> {
  //   return this._service.ballApiV1DmTargetGetOneDmTarget(_Id);
  // }

  // getAllDmGroupTarget(): Observable<ItemDmGroupTargetListApiResponse> {
  //   return this._service.ballApiV1DmGroupTargetSelectAll();
  // }
}
