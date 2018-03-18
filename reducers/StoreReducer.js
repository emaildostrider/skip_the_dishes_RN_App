import {UPDATE_STORES, UPDATE_COUSINES} from '../actions/types'
const INITIAL_STATE = {
  stores: [],
  cousines: []
}

export default(state = INITIAL_STATE, action) => {

  if (action.type == UPDATE_STORES) {
    return {
      ...state,
      stores: action.payload
    }
  }

  if (action.type == UPDATE_COUSINES) {
    return {
      ...state,
      cousines: action.payload
    }
  }

  return state
}