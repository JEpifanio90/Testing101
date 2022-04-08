import { createFeatureSelector } from "@ngrx/store";

import * as fromDashboard from "@project/store/reducers/dashboard.reducer";

export const selectUserState = createFeatureSelector<fromDashboard.State>(fromDashboard.featureKey);
