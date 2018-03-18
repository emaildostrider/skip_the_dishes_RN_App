import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'

import CompletedTrip from '../components/CompletedTrip'

class Completed extends Component{
  render(){
    return(
      <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      
      <CompletedTrip
      code={2532}
      bags={43}
      completed="01/20/18"
      address="La Grande Princess"
      tip="3.00"
      feedback="5 Star"
      fee="2.00"
      />
      <View style={styles.PaddingBottom} />
      </ScrollView>
      </View>
      )
  }
}

export default Completed

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