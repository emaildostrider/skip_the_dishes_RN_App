import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

class Product extends Component {

  render() {
    const {name, description, price} = this.props
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/images/store.jpg')}/>
        <View style={styles.content}>
          <Text style={styles.textSmall}>Name</Text>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.textSmall}>Description</Text>
          <Text style={styles.text}>{description}</Text>
          <Text style={styles.textSmall}>Price</Text>
          <Text style={styles.text}>${price}</Text>
        </View>
      </View>
    )
  }
}

export default Product

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginBottom: 15,
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width: 110,
    height: 110,
    marginRight: 5
  },
  content: {
    borderColor: '#4cbb17',
    padding: 5,
    flex: 1,
    flexDirection: 'column',
  },
  textSmall: {
    fontSize: 9,
    width: 100,
    marginBottom: 1
  },
  text: {
    fontSize: 11,
    marginBottom: 3
  }
})