import { IItemDetailsPanelProps } from "./IItemDetailsPanelProps";
import React from "react";
import { IRootState } from "../states/rootState";
import { Panel, PanelType, ImageFit } from "office-ui-fabric-react";
import { connect } from "react-redux";
import { OpenPanel } from "../actions/openPanelAction";
import { GetItem } from "../actions/getItemAction";
import { Image } from "office-ui-fabric-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import moment from 'moment';
import "moment/locale/es";

export class ItemDetailsPanel extends React.Component<IItemDetailsPanelProps, {}> {

    public render() {
        return (
            <Panel isOpen={this.props.IsOpen} onDismiss={() => this._onDismiss()} onOpened={() => this._onOpen()} type={PanelType.medium} headerText={this.props.strings.PanelHeader}>
                {
                    this.props.Item &&
                    <div>
                        <div className={'panelTitle'}>{this.props.Item.title}</div>
                        <div className={'panelDate'}>{ moment.locale((this.props.strings && this.props.strings.getLanguage && this.props.strings.getLanguage()) || "en") && moment(this.props.Item.start_time).format("LLL")}</div>
                        {
                            this.props.itemDetails && this.props.itemDetails.pictures && this.props.itemDetails.pictures.length > 0 &&
                            <div>
                                <Carousel className={'imagesCarousel'} showArrows={true} showThumbs={false} showStatus={false} >
                                    {
                                        this.props.itemDetails.pictures.map((p: any, index: number) =>
                                            <Image key={`_carouselImage${index}`} className={'imageCarousel'} src={p.url} imageFit={ImageFit.contain} />
                                        )
                                    }
                                </Carousel>
                            </div>
                        }
                    </div>
                }
            </Panel>
        );
    }

    private _onOpen = () => {
        this.props.getItem(this.props.Item.id);
    }

    private _onDismiss = () => {
        this.props.dismissPanel();
    }
}

const mapStateToProps = (state: IRootState): IItemDetailsPanelProps => ({
    IsOpen: state.searchState.isPanelOpen,
    Item: state.searchState.currentItem,
    strings: state.languageStrings,
    itemDetails: state.itemState.currentItem,
});

const mapDispatchToProps = (dispatch: any): IItemDetailsPanelProps => ({
    dismissPanel: () => {
        dispatch(OpenPanel(null, false));
    },
    getItem: (itemId: string) => {
        dispatch(GetItem(itemId));
    },
});

export const ItemDetailsPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ItemDetailsPanel);
