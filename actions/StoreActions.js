import axios from 'axios'
import setAuthorizationHearders from '../utils/setAuthorizationHearders'
import {API_URL} from '../Config'

import {USER_LOGGED_IN, DO_LOG_OUT, UPDATE_STORES, UPDATE_COUSINES} from './types'

export const getStores = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_URL}/api/v1/Store`)
        .then((response) => {
          if (response.status === 200) {
            dispatch(updateStores(response.data))
            resolve()
          } else {
            reject()
          }
        })
        .catch((error) => {
          reject()
        })
    })
  }
}

export const getCousines = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_URL}/api/v1/Cousine`)
        .then((response) => {
          if (response.status === 200) {
            dispatch(updateCousines(response.data))
            resolve()
          } else {
            reject()
          }
        })
        .catch((error) => {
          reject()
        })
    })
  }
}

export const getProducts = (store_id) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_URL}/api/v1/Store/${store_id}/products`)
        .then((response) => {
          if (response.status === 200) {
            resolve(response.data)
          } else {
            reject()
          }
        })
        .catch((error) => {
          reject()
        })
    })
  }
}

export const updateCousines = (cousines) => {
  return {type: UPDATE_COUSINES, payload: cousines}
}

export const updateStores = (stores) => {
  return {type: UPDATE_STORES, payload: stores}
}