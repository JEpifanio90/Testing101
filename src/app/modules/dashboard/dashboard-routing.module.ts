import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardContainer } from "@project/modules/dashboard/containers/dashboard.container";

const routes: Routes = [
  { path: "", component: DashboardContainer, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
