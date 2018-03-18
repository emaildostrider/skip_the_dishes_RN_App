import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import { Link, Route, withRouter } from 'react-router-native'

import {
  doLogOut
} from '../actions/AuthActions'

class Menu extends Component{

  _onLogOut(){
    this.props.doLogOut()
    this.props.history.push('/')
  }

  render(){
    return(
      <View style={styles.drawerContent}>

      <View style={styles.menuContainer}>

      <TouchableOpacity
      style={styles.menuItem}
      activeOpacity={0.9}
      onPress={() => {
        this.props.history.push({
          pathname: '/restrict/stores',
          state: { title: 'Stores' }
        })
        this.props.drawer.closeDrawer()
      }}
      >
      <Text style={styles.menuItemText}>Stores</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.menuItem}
      activeOpacity={0.9}
      onPress={() => {
        this.props.history.push({
          pathname: '/restrict/cousines',
          state: { title: 'Cousines' }
        })
        this.props.drawer.closeDrawer()
      }}
      >
      <Text style={styles.menuItemText}>Cousines</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.menuItem}
      activeOpacity={0.9}
      onPress={() => {
        this.props.history.push({
          pathname: '/restrict/my',
          state: { title: 'My orders' }
        })
        this.props.drawer.closeDrawer()
      }}
      >
      <Text style={styles.menuItemText}>My orders</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={[styles.menuItem, styles.menuItemLast]}
      activeOpacity={0.9}
      onPress={() => {
        this.props.history.push({
          pathname: '/restrict/completed',
          state: { title: 'Completed' }
        })
        this.props.drawer.closeDrawer()
      }}
      >
      <Text style={styles.menuItemText}>Completed</Text>
      </TouchableOpacity>

      </View>

      <TouchableOpacity
      style={styles.logOutButtom}
      activeOpacity={0.8}
      onPress={() => {
        this._onLogOut()
      }}
      >
      <Text style={styles.logOutText}>Logout</Text>
      </TouchableOpacity>

      </View>
      )
  }
}

export default withRouter(connect(null, {doLogOut})(Menu))

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#fff'
  },
  logOutButtom: {
    height: 40,
    backgroundColor: '#be2c2c',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  logOutText: {
    color: '#ffffff'
  },
  menuContainer: {
    padding: 40
  },
  menuItem: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1
  },
  menuItemLast: {
    borderBottomWidth: 0
  },
  menuItemText: {
    color: '#4a4a4a',
    width: '100%',
    textAlign: 'left',
    fontSize: 18
  }
})