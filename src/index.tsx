import * as React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import configureStore, { ApplicationState } from './store';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';

const history = createHashHistory();

const initialState: ApplicationState  = {
  panes: {
    visiblePanes: 1
  }
};

const store = configureStore(history, initialState);

// Log the initial state
console.log(store.getState());
​
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
store.subscribe(() => console.log(store.getState()) );

// Render the app
render(
  <Main store={store} history={history} />,
  document.getElementById('root') as HTMLElement
);

// Register the service worker
registerServiceWorker();
