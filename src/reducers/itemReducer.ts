// import defaults from "lodash-es/defaults";
// import * as  moment from 'moment';
import { Action, ActionTypes } from '../actions';
import { initialState } from '../states/rootState';
import { ItemState } from '../states/itemState';


export default (state: any = initialState, action: Action): ItemState => {

    switch (action.type) {
        case ActionTypes.GET_ITEM_REQUEST_SUCCESS:
            return {
                ...state,
                currentItem: {
                    ...action.response,
                }
            } as ItemState;

        default:
            return state;
    }
};