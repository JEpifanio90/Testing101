import { createReducer, on } from "@ngrx/store";

import * as DashboardActions from "@project/modules/dashboard/store/actions/dashboard.actions";
import { Character, Comic } from "@project/shared/models/common";

export const featureKey = "dashboard";

export interface State {
  loading: boolean;
  characters: Array<Character>;
  comics: Array<Comic>;
  error?: string;
}

export const initialState: State = {
  loading: false,
  characters: [],
  comics: []
};

export const reducer = createReducer(
  initialState,
  on(DashboardActions.fetchCharacters, state => ({
    ...state,
    loading: true,
    characters: [],
    comics: [],
    error: undefined
  })),
  on(DashboardActions.fetchCharactersSuccess, (state, action) => ({
    ...state,
    loading: false,
    characters: action.characters
  })),
  on(DashboardActions.fetchCharactersFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  })),
  on(DashboardActions.fetchComics, state => ({
    ...state,
    loading: true,
    comics: [],
    characters: [],
    error: undefined
  })),
  on(DashboardActions.fetchComicsSuccess, (state, action) => ({
    ...state,
    loading: false,
    comics: action.comics
  })),
  on(DashboardActions.fetchComicsFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
);
