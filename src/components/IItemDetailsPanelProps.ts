import { IStrings } from "../localization/strings";

export interface IItemDetailsPanelProps {
    Item?: any;
    IsOpen?: boolean;
    strings?: IStrings;
    itemDetails?: any;
    IsBusy?: boolean;
    dismissPanel?(): void;
    getItem?(itemId: string): void;
}