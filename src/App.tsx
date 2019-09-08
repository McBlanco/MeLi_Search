import './App.css';
import { MainContainer } from './components/Main';
import * as React from 'react';
import { LanguageSelectorContainer } from './components/LanguageSelector';
import { CardListContainer } from './components/CardList';

const App: React.FC = () => {
  return (
    <div className={'appContainer'}>
      <LanguageSelectorContainer />
      <MainContainer />
      <CardListContainer />
    </div>
  );
}

export default App;
