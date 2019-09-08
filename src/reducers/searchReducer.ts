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
      } as ISearchState;

    default:
      return state;
  }
};

