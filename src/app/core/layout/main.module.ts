import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "@project/core/layout/main-routing.module";
import { MainLayout } from "@project/core/layout/main.layout";
import { NbLayoutModule, NbMenuModule } from "@nebular/theme";

@NgModule({
  declarations: [
    MainLayout
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NbMenuModule,
    NbLayoutModule
  ]
})
export class MainModule {
}
