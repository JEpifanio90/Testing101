import * as fromRouter from "@ngrx/router-store";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";

import { environment } from "@project/env/environment";
import { CoreEffects, fromCore } from "@project/store/core.index";


export interface State {
  router: fromRouter.RouterReducerState;
  [fromCore.featureKey]: fromCore.State;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  [fromCore.featureKey]: fromCore.reducer
};

export const metaReducers: Array<MetaReducer<State>> = !environment.production ? [] : [];


export const effects = [CoreEffects];
