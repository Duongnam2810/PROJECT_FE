import { MatCheckboxModule } from '@angular/material/checkbox';
import { TemplateModule } from './../../../shared/template/template.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CateGroupTargetIndexComponent } from './cate-group-target-index/cate-group-target-index.component';
import { CateGroupTargetCrudComponent } from './cate-group-target-crud/cate-group-target-crud.component';

export const routes: Routes = [
  {
    path: '',
    component: CateGroupTargetIndexComponent,
    data: {
      title: "Danh mục nhóm chỉ tiêu",
      breadcrumb: "Danh mục nhóm chỉ tiêu",
    },
  }
]

@NgModule({
  declarations: [
    CateGroupTargetIndexComponent,
    CateGroupTargetCrudComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TemplateModule,
  ]
})
export class CateGroupTargetModule { }
