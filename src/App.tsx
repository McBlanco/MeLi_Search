import './App.scss';
import { MainContainer } from './components/Main';
import * as React from 'react';
import { LanguageSelectorContainer } from './components/LanguageSelector';

const App: React.FC = () => {
  return (
    <div className={'appContainer'}>
      <LanguageSelectorContainer />
      <MainContainer />
    </div>
  );
}

export default App;
