import { ConfirmComponent } from './../../../../shared/components/confirm/confirm.component';
import { PAGE_SIZE, STATUS_ACTION } from './../../../../shared/service/constants';
import { SUCCESS_RESPONSE } from 'src/app/shared/service/constants';
import { CommonService } from './../../../../shared/service/common.service';
import { CateGroupTargetService } from './../cate-group-target.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CateGroupTargetCrudComponent } from '../cate-group-target-crud/cate-group-target-crud.component';

@Component({
  selector: 'app-cate-group-target-index',
  templateUrl: './cate-group-target-index.component.html',
  styleUrls: ['./cate-group-target-index.component.scss']
})
export class CateGroupTargetIndexComponent implements OnInit {

  // pageModel: PageDmGroupTarget = new PageDmGroupTarget({
  //   currentPage: 1,
  //   pageSize: PAGE_SIZE,
  //   strKey: "",
  // });
  // target: ItemDmGroupTargetIEnumerablePageModelView = new ItemDmGroupTargetIEnumerablePageModelView({
  //   data: null,
  //   totalRecord: null,
  //   totalPage: null,
  //   currentPage: null,
  //   pageSize: null,
  //   recordsCount: null,
  // });

  checked = false;
  disabled = false;
  constructor(
    private _api: CateGroupTargetService,
    private commonService: CommonService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    // this._api.paging(this.pageModel).subscribe((res) => {
    //   if (res.data && res.code === SUCCESS_RESPONSE) {
    //     this.target = res.data;
    //     this.target.data.forEach(element => {
    //       this.isCheck = element.status == 1 ? true : false;
    //     });  
    //   } else {
    //     this.commonService.toastrError(res.message);
    //   }
    // })
  }

  changePage(event) {
    // this.pageModel.currentPage = event;
    this.loadData();
  }

  changeSize(event) {
    // this.pageModel.currentPage = 1;
    // this.pageModel.pageSize = event;
    this.loadData();
  }

  refresh() {
    // this.setPage(this.pageModel.currentPage);
  }

  setPage = function (pageNo) {
    this.pageModel.currentPage = pageNo;
    this.loadData();
  };

  create() {
    const modalRef = this.modalService.open(CateGroupTargetCrudComponent, {
      size: "xl",
      backdrop: "static",
      windowClass: "app-modal-window-70",
    });
    const data = {
      model: null,
      isCheck: true,
      actionType: STATUS_ACTION.create,
    };
    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((data) => {
      if (data) {
        this.refresh();
      }
    });
  }

  editAndDetail(item: any, isCheck: boolean) {
    const modalRef = this.modalService.open(CateGroupTargetCrudComponent, {
      size: "xl",
      backdrop: "static",
      windowClass: "app-modal-window-70",
    });
    const data = {
      model: item,
      isCheck: isCheck,
      actionType: STATUS_ACTION.edit,
    };
    modalRef.componentInstance.fromParent = data;
    modalRef.result.then((data) => {
      if (data) {
        this.refresh();
      }
    });
  }

  delete(item: any) {
    const modalRef = this.modalService.open(ConfirmComponent, {
      size: "xxl",
      backdrop: "static",
      windowClass: "app-modal-window-30",
    });
    modalRef.componentInstance.model = {
      title: "Xác nhận xóa",
      message: "Bạn có muốn xóa " + item.name,
    };
    modalRef.result.then((data) => {
      // if (data) {
      //   this._api.delete(item.id)
      //     .subscribe((res) => {
      //       if (res.code) {
      //         this.refresh();
      //         this.commonService.toastrSuccess(
      //           "Xóa " + item.name + " thành công!"
      //         );
      //       }
      //     });
      // }
    });
  }
  isCheck: boolean;
  clickUpdate(item: any) {
    // const model: DmGroupTargetStatusModel = new DmGroupTargetStatusModel();
    // model.id = item.id;
    // model.status = this.isCheck ? item.status = 1 : item.status = 2;
    // this._api.updateStatus(model).subscribe((res) => {
    //   if (res.code === SUCCESS_RESPONSE) {
    //     this.commonService.toastrSuccess("Thành công!");
    //     this.refresh();
    //   } else {
    //     this.commonService.toastrError(res.message);
    //   }
    // });
  }
}
