import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbLayoutModule } from "@nebular/theme";

import { AppRoutingModule } from "@project/app-routing.module";
import { AppComponent } from "@project/app.component";
import { CoreModule } from "@project/core/core.module";
import { NavActionsModule } from "@project/shared/components/nav-actions/nav-actions.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    CommonModule,
    NavActionsModule,
    NbLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
