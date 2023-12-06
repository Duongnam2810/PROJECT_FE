import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: "ngx-panging",
  templateUrl: "./sitePage.component.html",
  styleUrls: ["./sitePage.component.scss"],
})
export class SitePageComponent implements OnInit {
  @Input() totalPages: number;
  @Input() currentPage: number;
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() pageSize: EventEmitter<number> = new EventEmitter<number>();

  selectRecordInPage = 10;
  activePage: number;
  lstRecordInPage: any[] = [
    {
      value: 10,
      text: "10 dòng",
    },
    {
      value: 20,
      text: "20 dòng",
    },
    {
      value: 50,
      text: "50 dòng",
    },
    {
      value: 100,
      text: "100 dòng",
    },
    {
      value: 200,
      text: "200 dòng",
    },
    {
      value: 500,
      text: "500 dòng",
    },
    {
      value: 1000,
      text: "1000 dòng",
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.activePage = this.currentPage;
  }

  previous() {
    if (this.activePage > 1) {
      this.activePage--;
      this.changeTotalItems();
    }
  }
  next() {
    if (this.activePage < this.totalPages) {
      this.activePage++;
      this.changeTotalItems();
    }
  }

  pageFirst() {
    if (this.activePage !== 1) {
      this.activePage = 1;
      this.changeTotalItems();
    }
  }

  pageLast() {
    if (this.activePage !== this.totalPages) {
      this.activePage = this.totalPages;
      this.changeTotalItems();
    }
  }

  changeNumberPage() {
    if (
      this.currentPage !== null &&
      this.currentPage !== undefined &&
      this.currentPage > 0 &&
      this.currentPage < this.totalPages
    ) {
      this.activePage = this.currentPage;
      this.changeTotalItems();
    }
  }

  pageNumber: 1;
  changeTotalItems() {
    return this.pageChange.emit(this.activePage);
  }

  changePerPage() {
    this.activePage = 1;
    return this.pageSize.emit(this.selectRecordInPage);
  }
}
