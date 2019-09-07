import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "./store/index";
import { initialState } from './states/searchState';

initializeIcons(/* optional base url */);

ReactDOM.render(<Provider store={createStore(initialState)}><App /></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
