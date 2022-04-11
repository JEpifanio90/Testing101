import { ETheme } from "@project/shared/enums/theme.enum";
import { CoreActions, fromCore } from "@project/store/core.index";

describe("Core Reducer", () => {
  let customState: fromCore.State = fromCore.initialState;

  describe("Change Theme Action", () => {
    beforeEach(() => {
      customState = fromCore.initialState;
    });

    afterEach(() => {
      customState = fromCore.initialState;
    });

    it("should change the theme", () => {
      const result = fromCore.reducer(fromCore.initialState, CoreActions.changeTheme({ theme: ETheme.light }));
      customState.theme = ETheme.light;

      expect(result).toEqual(customState);
    });

    it("should update search query", () => {
      const result = fromCore.reducer(fromCore.initialState, CoreActions.updateQuery({ query: "comics" }));
      customState.query = "comics";

      expect(result).toEqual(customState);
    });
  });
});
