import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import shortid from 'shortid'
import {withRouter} from 'react-router-native'

import Store from '../components/Store'

import {getStores} from '../actions/StoreActions'
import {getCousines} from '../actions/StoreActions'

class Stores extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this
      .props
      .getCousines()
      .then((res) => {
        this
          .props
          .getStores()
          .then((res) => {
            this.setState({loading: false})
          }, (error) => {
            this.setState({loading: false})
          })
      }, (error) => {})
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {this.props.stores.length > 0 && this
            .props
            .stores
            .map((store) => {

              var cousine = null
              const arrayCousines = this.props.cousines
              for (var key in arrayCousines) {
                if (arrayCousines[key].id === store.cousineId) {
                  cousine = arrayCousines[key].name
                }
              }

              return <TouchableOpacity
                key={shortid.generate()}
                onPress={() => {
                this
                  .props
                  .history
                  .push({
                    pathname: '/restrict/products/' + store.id,
                    state: {
                      title: 'Products'
                    }
                  })
              }}><Store
                key={shortid.generate()}
                name={store.name}
                address={store.address}
                cousine={cousine}/>
              </TouchableOpacity>
            })}
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {stores: state.StoreReducer.stores, cousines: state.StoreReducer.cousines}
}

export default withRouter(connect(mapStateToProps, {getCousines, getStores})(Stores))

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