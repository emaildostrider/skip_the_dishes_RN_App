import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Icon from 'react-native-fa-icons'

class Cousine extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <View style={styles.col8}>
            <View style={styles.col2}>
              <Text style={styles.textSmall}>Order No</Text>
              <Text style={styles.textBig}>{this.props.code}</Text>
            </View>
            <View style={styles.col2}>
              <Text style={styles.textSmall}>No of Bags</Text>
              <Text style={styles.textBig}>{this.props.bags}</Text>
            </View>
          </View>
          <View style={styles.col4}>
            <Text style={styles.textSmall}>Time Due</Text>
            <Text style={styles.textBig}>{this.props.time}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.col8col}>
            <Text style={styles.textSmall}>Address</Text>
            <Text style={styles.textBig}>{this.props.address}</Text>
          </View>
          <View style={styles.col4}>
            <Text style={styles.textSmall}>Distance</Text>
            <Text style={styles.textBig}>{this.props.distance}
              miles</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Cousine

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginBottom: 15,
    padding: 15,
    paddingBottom: 5,
    flex: 1,
    flexDirection: 'column'
  },
  buttomContainer: {
    height: 25,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    flexDirection: 'row'
  },
  buttomSuccess: {
    borderColor: '#4cbb17',
    marginRight: 7
  },
  buttomDanger: {
    borderColor: '#ff583d',
    marginLeft: 7
  },
  buttomText: {
    color: '#4cbb17',
    fontSize: 12
  },
  buttomTextDanger: {
    color: '#ff583d',
    fontSize: 12
  },
  textSmall: {
    color: '#bbbbbb',
    fontSize: 10
  },
  textBig: {
    color: '#a4a4a4',
    fontSize: 12,
    marginTop: 2
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  col2: {
    flexDirection: 'column',
    flex: 2
  },
  col4: {
    flexDirection: 'column',
    flex: 4
  },
  col8: {
    flexDirection: 'row',
    flex: 8
  },
  col8col: {
    flexDirection: 'column',
    flex: 8
  }
})