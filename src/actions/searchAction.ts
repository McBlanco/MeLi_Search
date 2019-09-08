import { ActionTypes } from "./index";
import SearchProvider from "../providers/SearchProvider";
import { IRootState } from "../states/rootState";

export const Search = (query: string) => (dispatch: any, getState: any) => {
    
    dispatch({ type: ActionTypes.SEARCH_REQUEST, query: query });

    let searchProvider = new SearchProvider(getState() as IRootState);
    searchProvider.Search(query)
        .then( response =>
            dispatch({ type: ActionTypes.SEARCH_REQUEST_SUCCESS, response })
        )
        .catch( response =>
            dispatch({ type: ActionTypes.SEARCH_REQUEST_ERROR, response })
        )
};