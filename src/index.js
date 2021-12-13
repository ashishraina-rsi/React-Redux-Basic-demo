import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers,  applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import CounterReducer from './store/reducers/counter';
import PersonReducer from './store/reducers/person';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import personSaga from './redux-sagas/sagas';


const sagaMiddleware = createSagaMiddleware();

const RootReducers = combineReducers({CounterReducer,PersonReducer});

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(sagaMiddleware )))

sagaMiddleware.run(personSaga);

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
