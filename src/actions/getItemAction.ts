import { ActionTypes } from "./index";
import { IRootState } from "../states/rootState";
import { ItemProvider } from "../providers/ItemProvider";

export const GetItem = (itemId: string) => (dispatch: any, getState: any) => {
    
    dispatch({ type: ActionTypes.GET_ITEM_REQUEST, itemId: itemId });

    let itemProvider = new ItemProvider(getState() as IRootState);
    itemProvider.GetItem(itemId)
        .then( response =>
            dispatch({ type: ActionTypes.GET_ITEM_REQUEST_SUCCESS, response })
        )
        .catch( response =>
            dispatch({ type: ActionTypes.GET_ITEM_REQUEST_ERROR, response })
        )
};