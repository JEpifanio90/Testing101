import { createReducer, on } from "@ngrx/store";

import { ETheme } from "@project/shared/enums/theme.enum";
import * as CoreActions from "@project/store/actions/core.actions";

export const featureKey = "core";

export interface State {
  theme: ETheme;
}

export const initialState: State = {
  theme: ETheme.dark
};

export const reducer = createReducer(
  initialState,
  on(CoreActions.changeTheme, (state, action) => ({
    ...state,
    theme: action.theme
  }))
);
