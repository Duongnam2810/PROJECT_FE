import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { routes as CatetargetRoutes } from './cate-target/cate-target.module';
import { routes as CategrouptargetRoutes } from './cate-group-target/cate-group-target.module';

const routes: Routes = [
      {
        path: "",
        children: [
          {
            path: "cate-target",
            children: CatetargetRoutes,
          },
          {
            path: "cate-group-target",
            children: CategrouptargetRoutes,
          },
        ],
      },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }
