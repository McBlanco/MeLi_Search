import { IStrings } from "../localization/strings";

export interface ICardListProps {
    strings?: IStrings;
    Total?: number;
    Items?: Array<any>;
    IsBusy?: boolean;
    openPanel?(item: any): void;
}