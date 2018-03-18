import axios from 'axios'
import setAuthorizationHearders from '../utils/setAuthorizationHearders'
import {API_URL} from '../Config'

import {USER_LOGGED_IN, DO_LOG_OUT} from './types'

export const doLogIn = (data) => {
  const {email, password} = data
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}/api/v1/Customer/auth?email=${email}&password=${password}`)
        .then((response) => {
          if (response.status === 200) {
            dispatch(userLoggedIn)
            resolve(response.data)
          } else {
            reject('Login or password incorrects!')
          }
        })
        .catch((error) => {
          reject('Login or password incorrects!')
        })
    })
  }
}

export const userLoggedIn = () => {
  return {type: 'user_logged_in'}
}

export const doLogOut = () => {
  return {type: 'do_log_out'}
}