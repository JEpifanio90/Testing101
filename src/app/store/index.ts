import * as fromRouter from "@ngrx/router-store";
import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";

import { environment } from "@project/env/environment";
import { CoreEffects, CoreSelectors, fromCore } from "@project/store/core.index";
import { DashboardEffects, DashboardSelectors, fromDashboard } from "@project/store/dashboard.index";


export interface State {
  router: fromRouter.RouterReducerState;
  [fromDashboard.featureKey]: fromDashboard.State;
  [fromCore.featureKey]: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  [fromDashboard.featureKey]: fromDashboard.reducer,
  [fromCore.featureKey]: fromCore.reducer
};

export const metaReducers: Array<MetaReducer<State>> = !environment.production ? [] : [];

export const selectDashboardWithQuery = createSelector(
  DashboardSelectors.selectDashboardState,
  CoreSelectors.selectCoreState,
  (dashState: fromDashboard.State, coreState: fromCore.State) => ({
    state: dashState,
    query: coreState.query
  })
);

export const effects = [DashboardEffects, CoreEffects];
