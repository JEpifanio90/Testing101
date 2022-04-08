import { createFeatureSelector } from "@ngrx/store";

import * as fromDashboard from "@project/store/reducers/dashboard.reducer";

export const selectDashboardState = createFeatureSelector<fromDashboard.State>(fromDashboard.featureKey);
