import { connect } from "react-redux";
import * as React from "react";
import { Image, ImageFit, Spinner, SpinnerSize } from "office-ui-fabric-react";
import { IRootState } from "../states/rootState";
import { ICardListProps } from "./ICardListProps";
import NumberFormat from 'react-number-format';
import { OpenPanel } from "../actions/openPanelAction";

export class CardList extends React.Component<ICardListProps, {}> {

    public render() {
        return (
            <div>
                <Spinner className={`spinner ${this.props.IsBusy ? 'visibleElement' : 'hiddenElement'}`} size={SpinnerSize.large} />
                <div className={`cardListContainer ${this.props.IsBusy ? 'hiddenElement' : 'visibleElement'}`}>
                    {
                        this.props.Items && this.props.Items.length > 0 &&
                        this.props.Items.map((item, index) => {
                            return (
                                <div key={index} className={'cardItemContainer'} onClick={() => this._onOpenLink(item.permalink)}>
                                    <Image className={'cardItemImage'} imageFit={ImageFit.contain} src={item.thumbnail} />
                                    <div className={'cardDetailContainer'}>
                                        <NumberFormat className={'cardPrice'} value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                        {/* {`_${i.currency_id}`} */}
                                        <div className={'cardTitle'}>{item.title}</div>
                                        <div className={'cardOpenDetails'} onClick={(event) => { event.stopPropagation(); this._onOpenPanel(item); }}>{this.props.strings.OpenDetails}</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    {
                        this.props.Total === 0 ?
                            (
                                <div className={'noItemMessageText'}>{this.props.strings.NoItemsMessage}</div>
                            ) : (<div></div>)

                    }
                </div>
            </div>
        );
    }

    private _onOpenLink = (link: string) => {
        window.open(link, "_blank");
    }

    private _onOpenPanel = (item: any) => {
        this.props.openPanel(item);
    }
}

const mapStateToProps = (state: IRootState): ICardListProps => {
    let response = state.searchState.response;
    return {
        Total: response && response.paging && response.paging.total,
        Items: (response && response.results) || [],
        strings: state.languageStrings,
        IsBusy: state.searchState.isBusy,
    }
};

const mapDispatchToProps = (dispatch: any): ICardListProps => ({
    openPanel: (item: any) => {
        dispatch(OpenPanel(item, true));
    }
});

export const CardListContainer = connect(mapStateToProps, mapDispatchToProps)(CardList);