import { IItemProvider } from "./IItemProvider";
import { IRootState } from "../states/rootState";

export class ItemProvider implements IItemProvider {

    public ApiUrl: string;
    public State: IRootState;

    constructor(state: IRootState) {
        this.ApiUrl = "https://api.mercadolibre.com";
        this.State = state;
    }

    private get<T>(method: string, itemId: string): Promise<T> {
        return new Promise((resolve, reject) => {

            let url = `${this.ApiUrl}/${method}/${itemId}`;
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

    GetItem(itemId: string): Promise<any> {
        return this.get<any>("items", itemId);
    }

}