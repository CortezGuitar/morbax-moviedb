import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App/';
import TmdService from './services';
import { TmdServiceProvider } from './services';
import store from './store/store';

const tmdService = new TmdService();

ReactDOM.render(
  <Provider store={store}>
    <TmdServiceProvider value={tmdService}>
      <App />
    </TmdServiceProvider>
  </Provider>,
  document.getElementById('root')
);
