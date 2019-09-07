import { MiddlewareAPI, AnyAction } from 'redux';
import { Dispatch } from 'redux';
import { Middleware } from 'redux';
import { ISearchState } from '../states/searchState';

export const errorMiddleware: Middleware =
    (store: MiddlewareAPI<Dispatch<AnyAction>, ISearchState>) =>
        (next: Dispatch<AnyAction>) =>
            (action: AnyAction) => {
                if (action.type.toString().indexOf('_ERROR') > 0)
                    console.error(`%c ERROR Action with type ${action.type} --> ${action.error.message} [${action.error.stack}]`, 'background: red; color: white');

                return next(action);
            };
