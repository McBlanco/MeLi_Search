import './App.css';
import { MainContainer } from './components/Main';
import * as React from 'react';
import { LanguageSelectorContainer } from './components/LanguageSelector';
import { CardListContainer } from './components/CardList';
import { ItemDetailsPanelContainer } from './components/ItemDetailsPanel';

const App: React.FC = () => {
  return (
    <div className={'appContainer'}>
      <LanguageSelectorContainer />
      <MainContainer />
      <CardListContainer />
      <ItemDetailsPanelContainer />
    </div>
  );
}

export default App;
