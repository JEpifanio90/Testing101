import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";

import { DashboardService } from "@project/core/http/dashboard.service";
import { DashboardActions } from "@project/modules/dashboard/store";
import { Character, Comic } from "@project/shared/models/common";

@Injectable()
export class DashboardEffects {
  fetchCharacters$ = createEffect(() => this.actions$.pipe(
    ofType(DashboardActions.fetchCharacters),
    exhaustMap(action => this.dashboardService.getCharacters(action.page).pipe(
      map((characters: Array<Character>) => DashboardActions.fetchCharactersSuccess({ characters })),
      catchError(error => of(DashboardActions.fetchCharactersFailure({ error })))
    ))
  ));

  fetchComics$ = createEffect(() => this.actions$.pipe(
    ofType(DashboardActions.fetchComics),
    exhaustMap(action => this.dashboardService.getComics(action.page).pipe(
      map((comics: Array<Comic>) => DashboardActions.fetchComicsSuccess({ comics })),
      catchError(error => of(DashboardActions.fetchComicsFailure({ error })))
    ))
  ));

  constructor(private actions$: Actions, private dashboardService: DashboardService) {
  }
}
