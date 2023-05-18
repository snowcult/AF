import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App.jsx';
import './index.css';
import 'tachyons';
import { searchRobot, requestRobots } from './reducers/reducers.js';

const logger = createLogger();
const rootReducer = combineReducers({
  searchRobots: searchRobot,
  requestRobots: requestRobots,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware, logger],
});

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
