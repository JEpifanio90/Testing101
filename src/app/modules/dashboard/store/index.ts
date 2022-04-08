import * as DashboardActions from "@project/modules/dashboard/store/actions/dashboard.actions";
import * as fromDashboard from "@project/modules/dashboard/store/reducers/dashboard.reducer";
import * as DashboardSelectors from "@project/modules/dashboard/store/selectors/dashboard.selectors";

export * from "@project/modules/dashboard/store/effects/dashboard.effects";
export { fromDashboard, DashboardActions, DashboardSelectors };
