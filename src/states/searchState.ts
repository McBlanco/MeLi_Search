export interface ISearchState {
  currentPage: number;
  hasMorePage: boolean;
  response: any;
  country: string;
  isBusy: boolean;
  isPanelOpen: boolean;
  currentItem: any;
}