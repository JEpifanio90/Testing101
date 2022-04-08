import { Component } from "@angular/core";
import { Observable, tap } from "rxjs";
import { fromDashboard } from "@project/store/dashboard.index";
import { Store } from "@ngrx/store";
import { selectDashboardWithQuery } from "@project/store";

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
      }
    }));
  }
}
