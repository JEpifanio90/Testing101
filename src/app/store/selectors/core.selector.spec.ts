import { CoreSelectors, fromCore } from "@project/store/core.index";

describe("Core Selectors", () => {
  it("should select the feature state", () => {
    const result = CoreSelectors.selectCoreState({
      [fromCore.featureKey]: fromCore.initialState
    });

    expect(result).toEqual(fromCore.initialState);
  });
});
