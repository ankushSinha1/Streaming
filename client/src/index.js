import React from 'react';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import ReactDOM from 'react-dom/client';
import reduxThunk from 'redux-thunk';
import App from './components/App'
let composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composedEnhancer(applyMiddleware(reduxThunk)))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App/>
  </Provider>
);
