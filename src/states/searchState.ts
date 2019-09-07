export interface ISearchState {
  currentPage: number;
  hasMorePage: boolean;
  pageResults: any;
  country: string;
  isBusy: boolean;
}

export const initialState: ISearchState = {
  currentPage: 1,
  hasMorePage: true,
  pageResults: null,
  country: "MLA",
  isBusy: false,
};