import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DashboardContainer } from "@project/modules/dashboard/containers/dashboard.container";
import { DashboardRoutingModule } from "@project/modules/dashboard/dashboard-routing.module";
import { DashboardView } from "@project/modules/dashboard/views/dashboard.view";


@NgModule({
  declarations: [
    DashboardContainer,
    DashboardView
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
