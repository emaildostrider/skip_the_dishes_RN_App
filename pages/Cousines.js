import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

import Cousine from '../components/Cousine'

class Cousines extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <Cousine
            code={2532}
            bags={43}
            time="34h:20m"
            address="La Grande Princess"
            distance="3.5"/>
          <Cousine
            code={2532}
            bags={43}
            time="34h:20m"
            address="La Grande Princess"
            distance="3.5"/>
          <Cousine
            code={2532}
            bags={43}
            time="34h:20m"
            address="La Grande Princess"
            distance="3.5"/>
          <View style={styles.PaddingBottom}/>
        </ScrollView>
      </View>
    )
  }
}

export default Cousines

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  scroll: {
    padding: 15,
    paddingBottom: 0
  },
  PaddingBottom: {
    height: 25
  }
})