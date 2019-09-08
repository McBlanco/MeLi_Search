import { IStrings } from "../localization/strings";

export interface ILanguageSelectorProps {
    strings: IStrings;
    changeLanguage?(language: string): void;
}