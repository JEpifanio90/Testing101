import { Routes } from "@angular/router";

export const projectRoutes: Routes = [
  { path: "dashboard", loadChildren: () => import("@project/modules/dashboard/dashboard.module").then(m => m.DashboardModule) },
  { path: "**", redirectTo: "dashboard", pathMatch: "full" }
];
