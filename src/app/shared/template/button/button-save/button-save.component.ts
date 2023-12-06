import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-button-save",
  templateUrl: "./button-save.component.html",
  styleUrls: ["./button-save.component.scss"],
})
export class ButtonSaveComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() title: string;
  
  ngOnInit(): void {
    this.disabled = this.disabled ?? false;
    this.title = this.title ?? 'Lưu';
  }
}
