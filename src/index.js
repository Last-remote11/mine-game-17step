import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { 
  enableDarkModeReducer,
  gameState
} from './reducer'
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';



const reducer = {enableDarkMode: enableDarkModeReducer, gameState}

// const store = createStore(rootReducer, applyMiddleware(logger, thunk))

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
