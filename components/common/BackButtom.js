import React, {Component} from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'
import FontAwesome, {Icons} from 'react-native-fontawesome'
import {withRouter} from 'react-router-native'

const BackButtom = (props) => {
    return (
        <TouchableOpacity onPress={() => {props.history.goBack()}}>
            <View style={styles.container}>
                <FontAwesome
                    style={{
                    fontSize: 25,
                    color: '#ffffff'
                }}>{Icons.arrowLeft}</FontAwesome>
            </View>
        </TouchableOpacity>
    )
}

export default withRouter(BackButtom)

const styles = StyleSheet.create({
    container: {
        width: 55,
        height: 55,
        backgroundColor: '#be2c2c',
        position: 'absolute',
        right: 15,
        bottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }
})