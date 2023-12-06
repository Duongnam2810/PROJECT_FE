import { STATUS_ACTION } from "./../../../../shared/service/constants";
import { STATUS, SUCCESS_RESPONSE } from "src/app/shared/service/constants";
// import {
//   ItemDmGroupTarget,
//   ItemDmTarget,
// } from "../../../../shared/service/ball.service";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {
  CommonService,
  ConvertDatePipe,
} from "./../../../../shared/service/common.service";
import { CateTargetService } from "./../cate-target.service";
import { Component, OnInit, Input } from "@angular/core";
import { Guid } from "guid-typescript";

@Component({
  selector: "app-cate-target-crud",
  templateUrl: "./cate-target-crud.component.html",
  styleUrls: ["./cate-target-crud.component.scss"],
})
export class CateTargetCrudComponent implements OnInit {
  @Input() fromParent;
  isCheck: boolean;
  // target: ItemDmTarget = new ItemDmTarget();
  lstStatus = STATUS;
  // lstGroupDmTarget: ItemDmGroupTarget[] = [];
  constructor(
    private _api: CateTargetService,
    private commonService: CommonService,
    private activeModal: NgbActiveModal,
  ) {}
  ngOnInit(): void {
    // this._api.getAllDmGroupTarget().subscribe((res) => {
    //   if (res.code === SUCCESS_RESPONSE) {
    //     this.lstGroupDmTarget = res.data;
    //   }
    // });
    this.isCheck = this.fromParent.isCheck;
    if (this.fromParent.model) {
      this.loadData();
    }
  }

  loadData() {
    // this.target = this.fromParent.model;
    // this.target.publishDate = this.target.publishDate
    //   ? new ConvertDatePipe().transform(this.target.publishDate)
    //   : null;
  }

  changeGroupTargetId(event) {
    // this.target.groupTargetId = event.id;
  }

  onSave() {
    // this.target.publishDate = this.target.publishDate
    //   ? new Date(this.target.publishDate)
    //   : null;
    // if (this.fromParent.actionType === STATUS_ACTION.create) {
    //   this.target.id = Guid.create().toString();
    //   this._api.insert(this.target).subscribe((res) => {
    //     if (res.code === SUCCESS_RESPONSE) {
    //       this.commonService.toastrSuccess("Thành công!");
    //       this.onClose(true);
    //     } else {
    //       this.commonService.toastrError(res.message);
    //     }
    //   });
    // } else {
    //   this._api.update(this.target).subscribe((res) => {
    //     if (res.code === SUCCESS_RESPONSE) {
    //       this.commonService.toastrSuccess("Thành công!");
    //       this.onClose(true);
    //     } else {
    //       this.commonService.toastrError(res.message);
    //     }
    //   });
    // }
  }

  onClose(item: boolean) {
    this.activeModal.close(item);
  }
}
