import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
      // {
      //   path: "",
      //   children: [
      //     {
      //       path: "nguoi-van-chuyen",
      //       children: NguoiVcRoutes,
      //     },
      //   ],
      // },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SystemModule { }
