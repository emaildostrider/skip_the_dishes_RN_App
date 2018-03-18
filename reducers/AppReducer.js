import {USER_LOGGED_IN, DO_LOG_OUT} from '../actions/types'
const INITIAL_STATE = {
  isLogged: true,
  menuIsOpen: false
}

export default(state = INITIAL_STATE, action) => {
  if (action.type == USER_LOGGED_IN) {
    return {
      ...state,
      isLogged: true
    }
  }

  if (action.type == DO_LOG_OUT) {
    return {
      ...state,
      isLogged: false
    }
  }

  return state
}