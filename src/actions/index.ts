export enum ActionTypes {
  SEARCH_REQUEST = "SEARCH_REQUEST",
  SEARCH_REQUEST_SUCCESS = "SEARCH_REQUEST_SUCCESS",
  SEARCH_REQUEST_ERROR = "SEARCH_REQUEST_ERROR",

  CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
}

export type Action =
  { type: ActionTypes.SEARCH_REQUEST, query: string } |
  { type: ActionTypes.SEARCH_REQUEST_SUCCESS, response: any } |
  { type: ActionTypes.SEARCH_REQUEST_ERROR, response: any } |

  { type: ActionTypes.CHANGE_LANGUAGE, language: string }