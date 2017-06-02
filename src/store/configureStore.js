import {createStore,applyMiddleware} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import rootReducer from '../reducers';
import history from '../history';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
const configureStore=(initialState)=>{
  const middlewareHistory = routerMiddleware(history)
  return createStore(rootReducer,initialState,applyMiddleware(middlewareHistory,thunk,reduxImmutableStateInvariant()));
};
export default configureStore;
