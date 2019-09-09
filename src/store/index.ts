import { Store, createStore as reduxCreateStore, combineReducers, applyMiddleware, Middleware, StoreEnhancer } from "redux";
import searchReducer from "../reducers/searchReducer";
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as LogRocket from 'logrocket';
import { errorMiddleware } from "../middlewares/errorMiddleware";
import { ISearchState } from "../states/searchState";
import { IRootState } from "../states/rootState";
import languageReducer from "../reducers/languageReducer";
import itemReducer from "../reducers/itemReducer";

export function createStore(initialState: IRootState): Store<ISearchState> {

  const middlewares: Middleware[] = [
    reduxThunk,
    errorMiddleware,
    LogRocket.reduxMiddleware()
  ];

  const reducers = combineReducers({searchState: searchReducer, languageStrings: languageReducer, itemState: itemReducer})

  let composite: StoreEnhancer<any, {}> = composeWithDevTools(
      applyMiddleware(...middlewares));

  return reduxCreateStore(reducers, initialState, composite);
}
