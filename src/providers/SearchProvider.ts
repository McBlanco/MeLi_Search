import { ISearchProvider } from './ISearchProvider';
import { IRootState } from '../states/rootState';
import { Utils } from '../Utils';

export default class SearchProvider implements ISearchProvider {

    public ApiUrl: string;
    public State: IRootState;

    constructor(state: IRootState) {
        this.ApiUrl = "https://api.mercadolibre.com";
        this.State = state;
    }

    private get<T>(method: string, query: string): Promise<T> {
        return new Promise((resolve, reject) => {
            
          let url = Utils.UpdateQueryStringParameter(`${this.ApiUrl}/sites/${this.GetCountry()}/${method}`, "q", query);
          fetch(url, {
            method: "GET",
            cache: "no-cache",
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
          })
            .then(response => resolve(response.json()))
            .catch(err => reject(err));
        });
      }
    
    public Search(query: string): Promise<any> {
        return this.get<any>("search", query);
    }    
    
    public GetCountry(): string {
        return this.State.searchState.country;
    }
}