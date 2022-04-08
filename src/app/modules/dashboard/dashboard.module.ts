import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "@project/modules/dashboard/dashboard-routing.module";
import { DashboardContainer } from "@project/modules/dashboard/containers/dashboard.container";
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
