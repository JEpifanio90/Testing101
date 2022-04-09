import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";

import { DashboardActions, fromDashboard } from "@project/modules/dashboard/store";
import { selectDashboardWithQuery } from "@project/modules/dashboard/store/selectors/dashboard.selectors";

@Component({
  selector: "ng-dashboard",
  templateUrl: "./dashboard.container.html",
  styleUrls: ["./dashboard.container.scss"]
})
export class DashboardContainer {
  store$: Observable<{ state: fromDashboard.State, query: string }>;
  private currentQuery!: string;

  constructor(private store: Store) {
    this.store$ = this.store.select(selectDashboardWithQuery).pipe(tap((st: { state: fromDashboard.State, query: string }) => {
      if (this.currentQuery !== st.query) {
        this.currentQuery = st.query;
        this.store.dispatch((this.currentQuery === "characters") ? DashboardActions.fetchCharacters({ page: 1 }) : DashboardActions.fetchComics({ page: 1 }));
      }
    }));
  }

  /**
   * Dispatch Page Change
   *
   * @summary Dispatch a fetch comics | characters based on the current page
   * @param $page: number
   * @returns void
   */
  dispatchPageChange($page: number): void {
    this.store.dispatch((this.currentQuery === "characters") ? DashboardActions.fetchCharacters({ page: $page }) : DashboardActions.fetchComics({ page: $page }));
  }
}
