import { strings, IStrings } from "../localization/strings";
import { ISearchState } from "./searchState";
import { ItemState } from "./itemState";

export interface IRootState {
  languageStrings: IStrings;
  searchState: ISearchState;
  itemState: ItemState;
}

export const initialState: IRootState = {
  languageStrings: strings,
  searchState: {
    currentPage: 1,
    hasMorePage: true,
    response: null,
    country: "MLA",
    isBusy: false,
    isPanelOpen: false,
    currentItem: null,
  },
  itemState: {
    isBusy: false,
    currentItem: null,
  }
}