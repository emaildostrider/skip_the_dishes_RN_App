import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class CompletedTrip extends Component{

  render(){
    return(
      <View style={styles.container}>

      </View>
      )
  }
}

export default CompletedTrip

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 15,
    paddingBottom: 5,
    flex: 1,
    flexDirection: 'column',
  }
})