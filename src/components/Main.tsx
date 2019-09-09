import { IMainProps } from "./IMainProps";
import { connect } from "react-redux";
import { Search } from "../actions/searchAction";
import * as React from "react";
import { SearchBox, PrimaryButton } from "office-ui-fabric-react";
import { IRootState } from "../states/rootState";


export class Main extends React.Component<IMainProps, {}> {

  public render() {
    return (
      <div className={'mainContainer'}>
        <SearchBox placeholder={this.props.strings.SearchPlaceholder} onSearch={newValue => this._onSeach(newValue)} />
      </div>
    );
  }

  private _onSeach = (newValue: any) => {
    this.props.search && this.props.search(newValue);
  }
}

const mapStateToProps = (state: IRootState): IMainProps => ({
  strings: state.languageStrings,
});

const mapDispatchToProps = (dispatch: any): IMainProps => ({
  search: (query: string) => {
    dispatch(Search(query));
  },
});

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);