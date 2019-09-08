import * as LocalizedStrings from 'react-localization';

export interface IStrings extends LocalizedStrings.LocalizedStringsMethods {
    NoItemsMessage: string;
    OpenDetails: string;
    SearchPlaceholder: string;    
    PanelHeader: string;
}

export const strings: IStrings = new LocalizedStrings.default({
    en: {
        NoItemsMessage: "There are not items to show",
        OpenDetails: "Open details",
        SearchPlaceholder: "Search products, brands, and more...",
        PanelHeader: "Details",
    },
    es: {
        NoItemsMessage: "No hay resultados para mostrar",
        OpenDetails: "Abrir detalles",
        SearchPlaceholder: "Buscar productos, marcas, y más...",
        PanelHeader: "Detalles",
    }
});