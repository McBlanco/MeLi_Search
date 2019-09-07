import * as LocalizedStrings from 'react-localization';

export interface IStrings extends LocalizedStrings.LocalizedStringsMethods {
    SearchPlaceholder: string;
}

let strings: IStrings;
strings = new LocalizedStrings.default({
    en: {
        SearchPlaceholder: "Search products, brands, and more...",
    },
    es: {
        SearchPlaceholder: "Buscar productos, marcas, y más..."
    }
});

export default strings;
