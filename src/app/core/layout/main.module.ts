import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NbButtonModule, NbIconModule, NbLayoutModule, NbMenuModule } from "@nebular/theme";

import { MainRoutingModule } from "@project/core/layout/main-routing.module";
import { MainLayout } from "@project/core/layout/main.layout";

@NgModule({
  declarations: [
    MainLayout
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NbButtonModule,
    NbIconModule,
    NbMenuModule,
    NbLayoutModule
  ]
})
export class MainModule {
}
