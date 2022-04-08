import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainLayout } from "@project/core/layout/main.layout";
import { projectRoutes } from "@project/core/routes/application.routes";

const routes: Routes = [
  { path: "", component: MainLayout, children: projectRoutes },
  { path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
