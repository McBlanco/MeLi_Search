// import defaults from "lodash-es/defaults";
// import * as  moment from 'moment';
import { Action, ActionTypes } from '../actions';
import { ISearchState, initialState } from '../states/searchState';


export default (state: ISearchState = initialState, action: Action): ISearchState => {

  switch (action.type) {
    case ActionTypes.SEARCH_REQUEST:
      return {
        ...state,
      } as ISearchState;

    default:
      return state;
  }
};

