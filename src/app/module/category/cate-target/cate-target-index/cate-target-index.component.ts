import { Component, OnInit } from "@angular/core";
import { ConfirmComponent } from "src/app/shared/components/confirm/confirm.component";
import {
  PAGE_SIZE,
  STATUS_ACTION,
  SUCCESS_RESPONSE,
} from "src/app/shared/service/constants";
import { CateTargetCrudComponent } from "../cate-target-crud/cate-target-crud.component";
import { CateTargetService } from "../cate-target.service";
import { CommonService } from "src/app/shared/service/common.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-cate-target-index",
  templateUrl: "./cate-target-index.component.html",
  styleUrls: ["./cate-target-index.component.scss"],
})
export class CateTargetIndexComponent implements OnInit {
  // pageModel: PageDmTarget = new PageDmTarget({
  //   currentPage: 1,
  //   pageSize: PAGE_SIZE,
  //   strKey: "",
  // });
  // target: ItemDmTargetIEnumerablePageModelView =
  //   new ItemDmTargetIEnumerablePageModelView({
  //     data: null,
  //     totalRecord: null,
  //     totalPage: null,
  //     currentPage: null,
  //     pageSize: null,
  //     recordsCount: null,
  //   });

  checked = false;
  disabled = false;
  // lstGroupDmTarget: ItemDmGroupTarget[] = [];
  constructor(
    private _api: CateTargetService,
    private commonService: CommonService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    // this.loadData();
    // this._api.getAllDmGroupTarget().subscribe((res) => {
    //   if (res.code === SUCCESS_RESPONSE) {
    //     this.lstGroupDmTarget = res.data;
    //   } else {
    //     this.commonService.toastrError(res.message);
    //   }
    // });
  }

  loadData() {
    // this._api.paging(this.pageModel).subscribe((res) => {
    //   if (res.data && res.code === SUCCESS_RESPONSE) {
    //     this.target = res.data;
    //     this.target.data.forEach((element) => {
    //       this.isCheck = element.status == 1 ? true : false;
    //     });
    //   } else {
    //     this.commonService.toastrError(res.message);
    //   }
    // });
  }

  getAllDmGroupTarget(key) {
    let nameDmGroupTarget: string;
    // for (const item of this.lstGroupDmTarget) {
    //   if (item.id === key) {
    //     nameDmGroupTarget = item.name;
    //   }
    // }

    return nameDmGroupTarget;
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
    const modalRef = this.modalService.open(CateTargetCrudComponent, {
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

  editAndDetail(item, isCheck: boolean) {
    const modalRef = this.modalService.open(CateTargetCrudComponent, {
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

  delete(item) {
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
      //   this._api.delete(item.id).subscribe((res) => {
      //     if (res.code) {
      //       this.refresh();
      //       this.commonService.toastrSuccess(
      //         "Xóa " + item.name + " thành công!",
      //       );
      //     }
      //   });
      // }
    });
  }
  isCheck: boolean;
}
