import { ISearchProvider } from './ISearchProvider';
import { IRootState } from '../states/rootState';

export default class SearchProvider implements ISearchProvider {

    public ApiUrl: string;
    public Method: string;
    public State: IRootState;

    constructor(state: IRootState) {
        this.ApiUrl = "https://api.mercadolibre.com";
        this.Method = "search"
        this.State = state;
    }
    
    public Search(query: string) {
        console.log(query);
    }    
    
    public GetCountry(): string {
        return this.State.searchState.country;
    }
}