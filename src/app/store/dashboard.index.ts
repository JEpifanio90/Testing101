import * as DashboardActions from "@project/store/actions/dashboard.actions";
import * as fromDashboard from "@project/store/reducers/dashboard.reducer";
import * as DashboardSelectors from "@project/store/selectors/dashboard.selectors";

export * from "@project/store/effects/dashboard.effects";
export { fromDashboard, DashboardActions, DashboardSelectors };
