export enum ActionTypes {
  SEARCH_REQUEST = "SEARCH_REQUEST"
}

export type Action =
  { type: ActionTypes.SEARCH_REQUEST, query: string }