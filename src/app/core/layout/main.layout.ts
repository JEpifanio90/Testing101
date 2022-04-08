import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";

import { ETheme } from "@project/shared/enums/theme.enum";
import { CoreActions, CoreSelectors, fromCore } from "@project/store/core.index";

@Component({
  selector: "ng-main",
  templateUrl: "./main.layout.html",
  styleUrls: ["./main.layout.scss"]
})
export class MainLayout {
  store$: Observable<fromCore.State>;
  private theme!: ETheme;

  constructor(private store: Store<fromCore.State>) {
    this.store$ = this.store.select(CoreSelectors.selectCoreState).pipe(tap((state: fromCore.State) => {
      if (this.theme !== state.theme) {
        this.theme = state.theme;
      }
    }));
  }

  dispatchThemeAction(): void {
    this.store.dispatch(CoreActions.changeTheme({ theme: (this.theme === ETheme.dark) ? ETheme.light : ETheme.dark }));
  }
}
