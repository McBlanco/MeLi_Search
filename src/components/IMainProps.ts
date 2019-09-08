import { IStrings } from "../localization/strings";

export interface IMainProps {
    strings?: IStrings;
    search?: (query: string) => void;
}