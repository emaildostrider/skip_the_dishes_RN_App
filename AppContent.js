import React, {Component} from 'react'
import {View, StyleSheet, Platform, StatusBar} from 'react-native'
import {connect} from 'react-redux'
import {NativeRouter, Route, Link, Redirect} from 'react-router-native'

import Restrict from './pages/Restrict'
import Login from './pages/Login'

class AppContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBarContainer}>
                    <StatusBar backgroundColor="#ae2323" barStyle="light-content"/>
                </View>
                <NativeRouter>
                    <View style={styles.container}>
                        <Route
                            exact
                            path="/"
                            render={() => (this.props.isLogged
                            ? (<Redirect to="/restrict"/>)
                            : (<Login/>))}/>

                        <Route path="/restrict" component={Restrict}/>
                        <Route path="/login" component={Login}/>
                    </View>
                </NativeRouter>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {isLogged: state.AppReducer.isLogged}
}

export default connect(mapStateToProps, null)(AppContent)

const STATUSBAR_HEIGHT = Platform.OS === 'ios'
    ? 21
    : 0;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    statusBarContainer: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: '#ae2323'
    }
})
