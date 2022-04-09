import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbButtonGroupModule, NbCardModule, NbListModule, NbProgressBarModule, NbSpinnerModule } from "@nebular/theme";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { DashboardService } from "@project/core/http/dashboard.service";
import { DashboardContainer } from "@project/modules/dashboard/containers/dashboard.container";
import { DashboardRoutingModule } from "@project/modules/dashboard/dashboard-routing.module";
import { DashboardEffects, fromDashboard } from "@project/modules/dashboard/store";
import { DashboardView } from "@project/modules/dashboard/views/dashboard.view";


@NgModule({
  declarations: [
    DashboardContainer,
    DashboardView
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EffectsModule.forFeature([DashboardEffects]),
    NbButtonGroupModule,
    NbCardModule,
    NbListModule,
    NbSpinnerModule,
    NbProgressBarModule,
    StoreModule.forFeature(fromDashboard.featureKey, fromDashboard.reducer)
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule {
}
