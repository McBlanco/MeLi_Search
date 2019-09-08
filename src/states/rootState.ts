import { strings, IStrings } from "../localization/strings";
import { ISearchState } from "./searchState";

export interface IRootState {
  languageStrings: IStrings;
  searchState: ISearchState;
}

export const initialState: IRootState = {
  languageStrings: strings,
  searchState: {
    currentPage: 1,
    hasMorePage: true,
    pageResults: null,
    country: "MLA",
    isBusy: false,
  },
}