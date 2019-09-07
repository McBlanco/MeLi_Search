import { Store, createStore as reduxCreateStore, combineReducers, applyMiddleware, Middleware, StoreEnhancer } from "redux";
import searchReducer from "../reducers/searchReducer";
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as LogRocket from 'logrocket';
import { errorMiddleware } from "../middlewares/errorMiddleware";
import { ISearchState } from "../states/searchState";
import { IRootState } from "../states/rootState";

export function createStore(initialState: ISearchState): Store<ISearchState> {

  const middlewares: Middleware[] = [
    reduxThunk,
    errorMiddleware,
    LogRocket.reduxMiddleware()
  ];

  const rootState: IRootState = { searchState: initialState };

  const rootReducer = combineReducers({ searchState: searchReducer });

  let composite: StoreEnhancer<any, {}> = composeWithDevTools(
      applyMiddleware(...middlewares));

  return reduxCreateStore(rootReducer, rootState, composite);
}
