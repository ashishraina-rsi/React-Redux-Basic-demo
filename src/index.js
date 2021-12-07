import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const customMiddleWare = store => next => action => {
  console.log("customMiddleware => Middleware triggered:", action);
  next(action);
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(customMiddleWare, createLogger())))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
