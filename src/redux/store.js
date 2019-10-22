import { createStore,applyMiddlleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from './reducers'
import { IS_DEV } from '../config'
 
export default createStore(
  reducer,
  IS_DEV? composeWithDevTools(applyMiddlleware(thunk)) : applyMiddlleware(thunk)
)