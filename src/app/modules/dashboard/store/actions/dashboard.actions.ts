import { createAction, props } from "@ngrx/store";

export const fetchCharacters = createAction(
  "[Dashboard] Fetch Characters"
);

export const fetchCharactersSuccess = createAction(
  "[Dashboard] Fetch Characters Success",
  props<{ characters: Array<string> }>()
);

export const fetchCharactersFailure = createAction(
  "[Dashboard] Fetch Characters Failure",
  props<{ error: string }>()
);

export const fetchComics = createAction(
  "[Dashboard] Fetch Comics"
);

export const fetchComicsSuccess = createAction(
  "[Dashboard] Fetch Comics Success",
  props<{ comics: Array<string> }>()
);

export const fetchComicsFailure = createAction(
  "[Dashboard] Fetch Comics Failure",
  props<{ error: string }>()
);
