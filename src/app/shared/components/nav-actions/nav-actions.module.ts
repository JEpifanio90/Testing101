import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbButtonModule, NbIconModule, NbSelectModule } from "@nebular/theme";

import { NavActionsContainer } from "@project/shared/components/nav-actions/containers/nav-actions.container";
import { NavActionsView } from "@project/shared/components/nav-actions/views/nav-actions.view";

@NgModule({
  declarations: [
    NavActionsContainer,
    NavActionsView
  ],
  imports: [
    CommonModule,
    NbButtonModule,
    NbIconModule,
    NbSelectModule
  ],
  exports: [NavActionsContainer]
})
export class NavActionsModule {
}
