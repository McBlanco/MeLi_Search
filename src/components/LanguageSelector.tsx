import React from "react";
import { ILanguageSelectorProps } from "./ILanguageSelectorProps";
import { CommandBar } from "office-ui-fabric-react";
import { ChangeLanguage } from "../actions/changeLanguageAction";
import { IRootState } from "../states/rootState";
import { connect } from "react-redux";
import { strings } from "../localization/strings";

export class LanguageSelector extends React.Component<ILanguageSelectorProps, {}> {

  public render() {
    return (
      <div className={'selectorLanguageContainer'}>
        <CommandBar
          items={[]}
          farItems={[
            {
              key: "selectedLanguage",
              name: this.props.strings.getLanguage().toUpperCase(),
              iconProps: { iconName: "LocaleLanguage" },
              subMenuProps: {
                items: this.props.strings.getAvailableLanguages().map(l => {
                  return {
                    key: l,
                    name: l,
                    canCheck: true,
                    checked: this.props.strings.getLanguage() === l,
                    onClick: () => this._onClick(l),
                  };
                })
              }
            }
          ]}
        />
      </div>
    );
  }

  private _onClick = (language: string) => {
    this.props.changeLanguage && this.props.changeLanguage(language);
  }
}

const mapStateToProps = (state: IRootState): ILanguageSelectorProps => ({
  strings: state.languageStrings,
});

const mapDispatchToProps = (dispatch: any): ILanguageSelectorProps => ({
  changeLanguage: (language: string) => {
    dispatch(ChangeLanguage(language));
  },
  strings: strings,
});

export const LanguageSelectorContainer = connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);