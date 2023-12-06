import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: "system",
    loadChildren: () =>
      import("../../module/system/system.module").then(
        (m) => m.SystemModule
      ),
  },
  {
    path: "category",
    loadChildren: () =>
      import("../../module/category/category.module").then(
        (m) => m.CategoryModule
      ),
    data: {
      breadcrumb: "Danh mục",
    },
  },
  {
    path: "major",
    loadChildren: () =>
      import("../../module/major/major.module").then(
        (m) => m.MajorModule
      ),
    data: {
      breadcrumb: "Nghiệp vụ",
    },
  }
];