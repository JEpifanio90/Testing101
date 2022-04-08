import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DashboardContainer } from "@project/modules/dashboard/containers/dashboard.container";
import { DashboardRoutingModule } from "@project/modules/dashboard/dashboard-routing.module";
import { DashboardView } from "@project/modules/dashboard/views/dashboard.view";
import { DashboardService } from "@project/core/http/dashboard.service";
import { StoreModule } from "@ngrx/store";
import { DashboardEffects, fromDashboard } from "@project/modules/dashboard/store";
import { EffectsModule } from "@ngrx/effects";


@NgModule({
  declarations: [
    DashboardContainer,
    DashboardView
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EffectsModule.forFeature([DashboardEffects]),
    StoreModule.forFeature(fromDashboard.featureKey, fromDashboard.reducer)
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule {
}
