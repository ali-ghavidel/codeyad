
import { legacy_createStore } from 'redux'
import userReducer from './user/userReducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import logger from 'redux-logger'
import { applyMiddleware } from 'redux';
// import { thunk } from 'redux-thunk'
/* without thunk */
const store = legacy_createStore(userReducer, composeWithDevTools(applyMiddleware(logger)) );

export default store;