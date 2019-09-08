export enum ActionTypes {
  SEARCH_REQUEST = "SEARCH_REQUEST",
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
}

export type Action =
  { type: ActionTypes.SEARCH_REQUEST, query: string } |
  { type: ActionTypes.CHANGE_LANGUAGE, language: string }