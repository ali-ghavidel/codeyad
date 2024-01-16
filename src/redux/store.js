import { applyMiddleware, legacy_createStore } from 'redux'
import { rootReducer } from './rootReducer';
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)) );

export default store;