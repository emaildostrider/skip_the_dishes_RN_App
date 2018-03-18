import axios from 'axios'

export default function setAuthorizationHearders(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.hearders.common['Authorization']
    }
}