// import defaults from "lodash-es/defaults";
// import * as  moment from 'moment';
import { Action, ActionTypes } from '../actions';
import { initialState } from '../states/rootState';
import { ISearchState } from '../states/searchState';


export default (state: ISearchState = initialState.searchState, action: Action): ISearchState => {

  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST:
      return {
        ...state,
        isBusy: true,
      } as ISearchState;

      case ActionTypes.SEARCH_REQUEST_SUCCESS:
        return {
          ...state,
          response: {
            ...action.response,
            paging: {
              ...action.response.paging,
            },
            results: action.response.results.map((i: any) => i),
          },
          isBusy: false,
        } as ISearchState

    default:
      return state;
  }
};

