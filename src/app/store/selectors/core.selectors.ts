import { createFeatureSelector } from "@ngrx/store";

import * as fromCore from "@project/store/reducers/core.reducer";

export const selectCoreState = createFeatureSelector<fromCore.State>(fromCore.featureKey);
