import { Injectable } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

import * as CoreActions from "@project/store/actions/core.actions";

@Injectable()
export class CoreEffects {
  themeManager$ = createEffect(() => this.actions$.pipe(
    ofType(CoreActions.changeTheme),
    tap(action => {
      this.themeService.changeTheme(action.theme);
    })
  ), { dispatch: false });

  constructor(private actions$: Actions, private themeService: NbThemeService) {
  }
}
