import React, {Component} from 'React'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-native'

import {doLogIn} from '../actions/AuthActions'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: 'emaildostrider@gmail.com',
      password: '123456'
    }
  }

  _onSubmit() {
    this
      .props
      .doLogIn(this.state)
      .then((res) => {
        AsyncStorage.setItem('token', res)
      }, (error) => {
        alert(error)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
        <TextInput
          style={styles.inputText}
          autoCapitalize={'none'}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder='Email'/>
        <TextInput
          style={styles.inputText}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
          placeholder='Password'/>
        <TouchableOpacity
          style={styles.submit}
          activeOpacity={0.8}
          onPress={() => {
          this._onSubmit()
        }}>
          <Text style={styles.submitText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {isLogged: state.AppReducer.isLogged}
}

export default withRouter(connect(mapStateToProps, {doLogIn})(Login))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 208,
    height: 50,
    marginBottom: 10
  },
  inputText: {
    marginTop: 15,
    padding: 10,
    height: 40,
    width: 250,
    borderColor: '#dddddd',
    borderWidth: 1
  },
  submit: {
    marginTop: 15,
    backgroundColor: '#be2c2c',
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    color: '#ffffff'
  },
  version: {
    fontSize: 10,
    marginTop: 5
  }
})