import { IStrings } from "../localization/strings";

export interface ICardListProps {
    strings?: IStrings;
    Total?: number;
    Items?: Array<any>;
    openPanel?(item: any): void;
}