import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Confirm } from '../../service/constants';

@Component({
  selector: "app-confirm",
  templateUrl: "./confirm.component.html",
  styleUrls: ["./confirm.component.scss"],
})
export class ConfirmComponent implements OnInit {
  @Input() model: any;
  constructor(private activeModal: NgbActiveModal) {}
  confirm: Confirm;
  
  ngOnInit() {
    this.confirm.icon = this.model.icon ?? "info-circle";
    this.confirm.color = this.model.color ?? "text-primary";
    this.confirm.title = this.model.title ?? "Thông báo";
    this.confirm.message = this.model.message ?? null;
    this.confirm.type = this.model.type ?? 0;
    this.confirm.isAppend = this.model.isAppend ?? false;
  }

  close(value: boolean) {
    this.activeModal.close(value);
  }
}
