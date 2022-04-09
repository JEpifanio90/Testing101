import { createAction, props } from "@ngrx/store";

import { Character, Comic } from "@project/shared/models/common";

export const fetchCharacters = createAction(
  "[Dashboard] Fetch Characters",
  props<{ page: number }>()
);

export const fetchCharactersSuccess = createAction(
  "[Dashboard] Fetch Characters Success",
  props<{ characters: Array<Character> }>()
);

export const fetchCharactersFailure = createAction(
  "[Dashboard] Fetch Characters Failure",
  props<{ error: string }>()
);

export const fetchComics = createAction(
  "[Dashboard] Fetch Comics",
  props<{ page: number }>()
);

export const fetchComicsSuccess = createAction(
  "[Dashboard] Fetch Comics Success",
  props<{ comics: Array<Comic> }>()
);

export const fetchComicsFailure = createAction(
  "[Dashboard] Fetch Comics Failure",
  props<{ error: string }>()
);
