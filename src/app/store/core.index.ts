import * as CoreActions from "@project/store/actions/core.actions";
import * as fromCore from "@project/store/reducers/core.reducer";
import * as CoreSelectors from "@project/store/selectors/core.selectors";

export * from "@project/store/effects/core.effects";
export { fromCore, CoreActions, CoreSelectors };
