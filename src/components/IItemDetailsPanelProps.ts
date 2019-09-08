import { IStrings } from "../localization/strings";

export interface IItemDetailsPanelProps {
    Item?: any;
    IsOpen?: boolean;
    strings?: IStrings;
    dismissPanel?(): void;
}