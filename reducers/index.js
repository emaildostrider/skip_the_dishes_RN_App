import {combineReducers} from 'redux'

import AppReducer from './AppReducer'
import StoreReducer from './StoreReducer'

export default combineReducers({
  AppReducer,
  StoreReducer
})