import {
  BallApiService
} from '../../../shared/service/ball.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CateGroupTargetService {

  constructor(private _service: BallApiService) { }

  // paging(body: PageDmGroupTarget | undefined): Observable<ItemDmGroupTargetIEnumerablePageModelViewApiResponse> {
  //   return this._service.ballApiV1DmGroupTargetPostPagingDmGroupTarget(body);
  // }

  // insert(body: ItemDmGroupTarget | undefined): Observable<ApiResponse> {
  //   return this._service.ballApiV1DmGroupTargetPostInsertDmGroupTarget(body);
  // }

  // update(body: ItemDmGroupTarget | undefined): Observable<ApiResponse> {
  //   return this._service.ballApiV1DmGroupTargetPostUpdateDmGroupTarget(body);
  // }

  // delete(_Id: string): Observable<ApiResponse> {
  //   return this._service.ballApiV1DmGroupTargetPostDeleteDmGroupTarget(_Id);
  // }

  // getOne(_Id: string): Observable<ItemDmGroupTargetApiResponse> {
  //   return this._service.ballApiV1DmGroupTargetGetOneDmGroupTarget(_Id)
  // }

  // updateStatus(body: DmGroupTargetStatusModel | undefined): Observable<ApiResponse> {
  //   return this._service.ballApiV1DmGroupTargetUpdateStatus(body);
  // }
}
