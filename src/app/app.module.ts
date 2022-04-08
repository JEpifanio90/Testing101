import { NgModule } from "@angular/core";

import { AppRoutingModule } from "@project/app-routing.module";
import { AppComponent } from "@project/app.component";
import { CoreModule } from "@project/core/core.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
