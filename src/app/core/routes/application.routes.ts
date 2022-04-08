import { Routes } from "@angular/router";

export const projectRoutes: Routes = [
  { path: "character/:name", loadChildren: () => import("@project/modules/character/character.module").then(m => m.CharacterModule) },
  { path: "dashboard", loadChildren: () => import("@project/modules/dashboard/dashboard.module").then(m => m.DashboardModule) },
  { path: "**", redirectTo: "dashboard", pathMatch: "full" }
];
