//https://babeljs.io/docs/usage/polyfill/
// "If you are using ES6’s import syntax in your application’s entry point, you should instead import the polyfill at the top of the entry point to ensure the polyfills are loaded first"
import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import routes from './routes';
import {configureStore} from './store';

/**
 * An initial store state can be restored from
 * local storage if needed.
 */
const initialStoreState = undefined;
const store = configureStore(browserHistory, initialStoreState);
const history = syncHistoryWithStore(browserHistory, store);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

render((
  <Provider store={store}>
      <Router history={history} routes={routes} />
  </Provider>
    ), document.getElementById('root')
);


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
