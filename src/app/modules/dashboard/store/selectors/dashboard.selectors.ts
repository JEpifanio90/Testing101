import { createFeatureSelector, createSelector } from "@ngrx/store";

import * as fromDashboard from "@project/modules/dashboard/store/reducers/dashboard.reducer";
import { CoreSelectors, fromCore } from "@project/store/core.index";

export const selectDashboardState = createFeatureSelector<fromDashboard.State>(fromDashboard.featureKey);

export const selectDashboardWithQuery = createSelector(
  selectDashboardState,
  CoreSelectors.selectCoreState,
  (dashState: fromDashboard.State, coreState: fromCore.State) => ({
    state: dashState,
    query: coreState.query
  })
);
