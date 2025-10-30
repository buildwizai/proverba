import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import formReducer from './form.js';
import rootSaga from './sagas.js';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  combineReducers({
    form: formReducer,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
