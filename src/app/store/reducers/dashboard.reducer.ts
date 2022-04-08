import { createReducer, on } from "@ngrx/store";

import * as DashboardActions from "@project/store/actions/dashboard.actions";

export const featureKey = "user";

export interface State {
  flag: boolean;
}

export const initialState: State = {
  flag: false
};

export const reducer = createReducer(
  initialState,
  on(DashboardActions.changeTheme, state => ({
    ...state,
    flag: true
  }))
);
