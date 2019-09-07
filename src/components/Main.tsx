import React from "react";
import { IMainProps } from "./IMainProps";
import { SearchBox } from "office-ui-fabric-react";
import strings from "../localization/strings";

export class Main extends React.Component<IMainProps, {}> {

    public render() {
        return (
            <div className={'mainContainer'}>
                <SearchBox placeholder={strings.SearchPlaceholder} onSearch={newValue => this._onSeach(newValue)} />
            </div>
        );
    }

    private _onSeach = (newValue: any) => {
        
    }
}