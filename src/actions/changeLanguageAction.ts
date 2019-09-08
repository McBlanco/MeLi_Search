import { ActionTypes } from ".";

export const ChangeLanguage = (language: string) => (dispatch: any, getState: any) => {    
    dispatch({ type: ActionTypes.CHANGE_LANGUAGE, language: language })
};