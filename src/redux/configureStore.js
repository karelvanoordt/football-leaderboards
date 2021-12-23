import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import homeReducer from './pages/homeReducer';
import standingReducer from './pages/standingsReducer';

const reducer = combineReducers({
  home: homeReducer,
  standing: standingReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;