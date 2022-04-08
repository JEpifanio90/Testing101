import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";

import { ETheme } from "@project/shared/enums/theme.enum";
import { CoreActions, CoreSelectors, fromCore } from "@project/store/core.index";

@Component({
  selector: "ng-nav-actions",
  templateUrl: "./nav-actions.container.html",
  styleUrls: ["./nav-actions.container.scss"]
})
export class NavActionsContainer {
  store$: Observable<fromCore.State>;
  private theme!: ETheme;

  constructor(private store: Store<fromCore.State>) {
    this.store$ = this.store.select(CoreSelectors.selectCoreState).pipe(tap((state: fromCore.State) => {
      if (this.theme !== state.theme) {
        this.theme = state.theme;
      }
    }));
  }

  /**
   * Dispatch Theme Action
   *
   * @summary Dispatch a change theme action
   * @param $theme: ETheme
   * @returns void
   */
  dispatchThemeAction($theme: ETheme): void {
    this.store.dispatch(CoreActions.changeTheme({ theme: $theme }));
  }
}
