import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import shortid from 'shortid'

import Product from '../components/Product'
import BackButtom from '../components/common/BackButtom'

import {getProducts} from '../actions/StoreActions'

class Products extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      products: []
    }
  }

  componentDidMount() {
    this
      .props
      .getProducts(this.props.match.params.store_id)
      .then((res) => {
        this.setState({loading: false, products: res})
      }, (error) => {
        this.setState({loading: false})
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {this.state.products.length > 0 && this
            .state
            .products
            .map((product) => {
              return <Product
                key={shortid.generate()}
                name={product.name}
                description={product.description}
                price={product.price}/>
            })}
        </ScrollView>
        <BackButtom />
      </View>
    )
  }
}

export default connect(null, {getProducts})(Products)

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