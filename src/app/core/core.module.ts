import { HttpClientModule } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { NbThemeModule } from "@nebular/theme";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { environment } from "@project/environments/environment";
import * as fromRoot from "@project/store/index";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbThemeModule.forRoot({ name: "dark" }),
    NbEvaIconsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name: "Testing 101 State" }),
    StoreModule.forRoot(
      fromRoot.reducers,
      {
        metaReducers: fromRoot.metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true
        }
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(fromRoot.effects)
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() module?: CoreModule) {
    if (module) {
      throw new Error("GreetingModule is already loaded. Import it in the AppModule only");
    }
  }
}
