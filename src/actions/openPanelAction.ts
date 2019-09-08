import { ActionTypes } from ".";

export const OpenPanel = (item: any, isOpening: boolean) => (dispatch: any, getState: any) => {
    if (isOpening)
        dispatch({ type: ActionTypes.OPEN_PANEL, item: item });
    else
        dispatch({ type: ActionTypes.DISMISS_PANEL });
};