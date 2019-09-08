// import defaults from "lodash-es/defaults";
// import * as  moment from 'moment';
import { Action, ActionTypes } from '../actions';
import { IStrings, strings } from '../localization/strings';
import { initialState } from '../states/rootState';


export default (state: any = initialState, action: Action): IStrings => {

    switch (action.type) {
        case ActionTypes.CHANGE_LANGUAGE:

            strings.setLanguage(action.language);

            return {
                ...strings,
            } as IStrings;

        default:
            return state;
    }
};