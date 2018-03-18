import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { withRouter } from 'react-router-native'

import MyTrip from '../components/MyTrip'

class My extends Component{
  render(){
    return(
      <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      
      <TouchableOpacity
      style={styles.menuItem}
      activeOpacity={0.9}
      onPress={() => {
        this.props.history.push({
          pathname: '/restrict/details',
          state: {
            title: 'Trip Details',
            order: 123
          }
        })
      }}
      >
      <MyTrip
      code={2532}
      bags={43}
      time="34h:20m"
      address="La Grande Princess"
      distance="3.5"
      status="Accepted"
      name="Jhon Doe"
      />
      </TouchableOpacity>

      <MyTrip
      code={2532}
      bags={43}
      time="34h:20m"
      address="La Grande Princess"
      distance="3.5"
      status="Accepted"
      name="Jhon Doe"
      />
      <MyTrip
      code={2532}
      bags={43}
      time="34h:20m"
      address="La Grande Princess"
      distance="3.5"
      status="Accepted"
      name="Jhon Doe"
      />
      <View style={styles.PaddingBottom} />
      </ScrollView>
      </View>
      )
  }
}

export default withRouter(My)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scroll: {
    padding: 30,
    paddingBottom: 0
  },
  PaddingBottom: {
    height: 40
  }
})