import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middlewares = [thunkMiddleware, promiseMiddleware];

if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
  middlewares.push(require('redux-logger').createLogger());
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'account'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = composeEnhancers(applyMiddleware(...middlewares));
let store = createStore(persistedReducer,enhancer);
let persistor = persistStore(store);
export { store, persistor };
