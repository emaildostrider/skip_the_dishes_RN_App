import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing
} from 'react-native'
import Drawer from 'react-native-drawer-menu'
import { Route } from 'react-router-native'

import Header from '../components/Header'
import Menu from '../components/Menu'

import Cousines from '../pages/Cousines'
import My from '../pages/My'
import Completed from '../pages/Completed'
import Stores from '../pages/Stores'
import Products from '../pages/Products'

class Restrict extends Component{

  _menuHandler(){
    openDrawer()
  }

  render(){

    openDrawer = () => {
      let currentWidth = Math.abs(this.menu._getCurrentDrawerWidth())
      if (currentWidth > 0) {
        this.menu.closeDrawer()
      }else{
        this.menu.openDrawer()
      }
    }

    var drawerContent = (<Menu />);

    return(
      <View style={styles.container}>
      <Header menuHandler={this._menuHandler} />
      <Drawer
      ref={(element) => this.menu = element}
      style={styles.drawerContainer}
      drawerWidth={300}
      drawerContent={drawerContent}
      type={Drawer.types.Overlay}
      customStyles={{drawer: styles.drawer}}
      easingFunc={Easing.ease}
      >
      <View style={styles.container}>
      <Route exact path="/restrict" component={Stores}/>
      <Route path="/restrict/stores" component={Stores}/>
      <Route path="/restrict/cousines" component={Cousines}/>
      <Route path="/restrict/products/:store_id" component={Products}/>
      <Route path="/restrict/my" component={My}/>
      <Route path="/restrict/completed" component={Completed}/>
      </View>
      </Drawer>
      </View>
      )
  }
}

export default Restrict

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContainer: {

  },
  drawer: {

  }
})