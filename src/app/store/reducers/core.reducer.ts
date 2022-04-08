import { createReducer, on } from "@ngrx/store";

import { ETheme } from "@project/shared/enums/theme.enum";
import * as CoreActions from "@project/store/actions/core.actions";

export const featureKey = "core";

export interface State {
  theme: ETheme;
  query: string;
}

export const initialState: State = {
  theme: ETheme.dark,
  query: "characters"
};

export const reducer = createReducer(
  initialState,
  on(CoreActions.changeTheme, (state, action) => ({
    ...state,
    theme: action.theme
  })),
  on(CoreActions.updateQuery, (state, action) => ({
    ...state,
    query: action.query
  }))
);
