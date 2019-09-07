import { IMeliProvider } from "./IMeliProvider";
import { IRootState } from "../states/rootState";

export interface ISearchProvider extends IMeliProvider {
    State: IRootState;
    Search(query: string): any;
}