import { IItemDetailsPanelProps } from "./IItemDetailsPanelProps";
import React from "react";
import { IRootState } from "../states/rootState";
import { Panel, PanelType } from "office-ui-fabric-react";
import { connect } from "react-redux";
import { OpenPanel } from "../actions/openPanelAction";

export class ItemDetailsPanel extends React.Component<IItemDetailsPanelProps, {}> {

    public render() {
        return (
            <Panel isOpen={this.props.IsOpen} onDismiss={() => this._onDismiss()} type={PanelType.medium} headerText={this.props.strings.PanelHeader}>
                {
                    this.props.Item &&
                    <span>{this.props.Item.title}</span>
                }
            </Panel>
        );
    }

    private _onDismiss = () => {
        this.props.dismissPanel();
    }
}

const mapStateToProps = (state: IRootState): IItemDetailsPanelProps => ({
    IsOpen: state.searchState.isPanelOpen,
    Item: state.searchState.currentItem,
    strings: state.languageStrings,
});

const mapDispatchToProps = (dispatch: any): IItemDetailsPanelProps => ({
    dismissPanel: () => {
        dispatch(OpenPanel(null, false));
    }
});

export const ItemDetailsPanelContainer = connect(mapStateToProps, mapDispatchToProps)(ItemDetailsPanel);
