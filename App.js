import React, {Component} from 'react'
import {
  Text,
  AsyncStorage
} from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import setAuthorizationHearders from './utils/setAuthorizationHearders'

import AppContent from './AppContent'
import {userLoggedIn} from './actions/AuthActions'
import reducers from './reducers'

class App extends Component{

  constructor(props){
    super(props)
    Text.defaultProps.style = { fontFamily: 'Arial' }
  }

  render(){

    const store = createStore(reducers, applyMiddleware(thunk))

    if(AsyncStorage.token){
      setAuthorizationHearders(AsyncStorage.token)
      store.dispatch(userLoggedIn)
    }

    return (
      <Provider store={store}>
        <AppContent />
      </Provider>
      )
  }
}

export default App