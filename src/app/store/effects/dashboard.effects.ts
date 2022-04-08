import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

import * as DashboardActions from "@project/store/actions/dashboard.actions";

@Injectable()
export class DashboardEffects {
  themeManager$ = createEffect(() => this.actions$.pipe(
    ofType(DashboardActions.changeTheme),
    tap(action => {
    })
  ), { dispatch: false });

  constructor(private actions$: Actions) {
  }
}
