import { IMeliProvider } from "./IMeliProvider";
import { IRootState } from "../states/rootState";

export interface IItemProvider extends IMeliProvider {
    State: IRootState;
    GetItem(itemId: string): Promise<any>;
}