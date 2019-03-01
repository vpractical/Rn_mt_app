/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class CommonView extends Component<Props> {
    static deaultProps={
        title:'',
        subTitle:'',
        rightIconL:'',
        titleColor:'',
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}  onPress={this._pressButton.bind(this)}>
                    HomeDetail页面_点击返回
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});


