import { createAction, props } from "@ngrx/store";

import { ETheme } from "@project/shared/enums/theme.enum";

export const changeTheme = createAction(
  "[Core] Change Theme",
  props<{ theme: ETheme }>()
);
