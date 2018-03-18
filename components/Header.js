import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome'
import {withRouter} from 'react-router-native'

class Header extends Component {

  _menuHandler() {
    this
      .props
      .menuHandler()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>{this.props.location.state
            ? this.props.location.state.title
            : 'Stores'}</Text>
        <TouchableOpacity
          style={styles.menuButtom}
          activeOpacity={0.9}
          onPress={() => {
          this._menuHandler()
        }}>
          <FontAwesome style={{ fontSize: 25, color: '#ffffff', alignSelf: 'flex-end' }}>{Icons.bars}</FontAwesome>
        </TouchableOpacity>
      </View>
    )
  }
}

export default withRouter(Header)
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#be2c2c',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 158,
    height: 38
  },
  pageTitle: {
    color: '#ffffff',
    fontSize: 18,
    left: 20,
    fontWeight: 'bold'
  },
  menuButtom: {
    marginRight: 20,
    width: 45
  }
})