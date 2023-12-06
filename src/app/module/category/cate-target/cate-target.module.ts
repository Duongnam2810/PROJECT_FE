import { TemplateModule } from "./../../../shared/template/template.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CateTargetIndexComponent } from "./cate-target-index/cate-target-index.component";
import { CateTargetCrudComponent } from "./cate-target-crud/cate-target-crud.component";

export const routes: Routes = [
  {
    path: "",
    component: CateTargetIndexComponent,
    data: {
      title: "Danh mục chỉ tiêu",
      breadcrumb: "Danh mục chỉ tiêu",
    },
  },
];

@NgModule({
  declarations: [CateTargetIndexComponent, CateTargetCrudComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TemplateModule],
})
export class CateTargetModule {}
