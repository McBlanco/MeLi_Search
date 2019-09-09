export enum ActionTypes {
  SEARCH_REQUEST = "SEARCH_REQUEST",
  SEARCH_REQUEST_SUCCESS = "SEARCH_REQUEST_SUCCESS",
  SEARCH_REQUEST_ERROR = "SEARCH_REQUEST_ERROR",
  
  GET_ITEM_REQUEST = "GET_ITEM_REQUEST",
  GET_ITEM_REQUEST_SUCCESS = "GET_ITEM_REQUEST_SUCCESS",
  GET_ITEM_REQUEST_ERROR = "GET_ITEM_REQUEST_ERROR",

  OPEN_PANEL = "OPEN_PANEL",
  DISMISS_PANEL = "DISMISS_PANEL",

  CHANGE_LANGUAGE = "CHANGE_LANGUAGE"
}

export type Action =
  { type: ActionTypes.SEARCH_REQUEST, query: string } |
  { type: ActionTypes.SEARCH_REQUEST_SUCCESS, response: any } |
  { type: ActionTypes.SEARCH_REQUEST_ERROR, response: any } |
  
  { type: ActionTypes.GET_ITEM_REQUEST, itemId: string } |
  { type: ActionTypes.GET_ITEM_REQUEST_SUCCESS, response: any } |
  { type: ActionTypes.GET_ITEM_REQUEST_ERROR, response: any } |

  { type: ActionTypes.OPEN_PANEL, item: any } |
  { type: ActionTypes.DISMISS_PANEL } |

  { type: ActionTypes.CHANGE_LANGUAGE, language: string }