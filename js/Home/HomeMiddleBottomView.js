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
import HomeMiddleCommonView from './HomeMiddleCommonView'

export default class HomeMiddleBottomView extends Component<Props> {
    renderBottomItem() {
        var itemArr = [];
        var dataArr = Home_D4.data;
        for (var i = 0; i < dataArr.length; i++) {
            var itemData = dataArr[i];
            itemArr.push(<HomeMiddleCommonView
            title={data.maintitle}
            subTitle={data.deputytitle}
            rightIcon={data.imageurl}
            titleColor={data.typeface_color}
            key={i}
            />)


        }

    }

    render() {
        return (
            <View style={styles.containerSty}>
                    {/*上部分*/}
                    <View style={styles.topViewStyle}>

                    </View>

                    {/*下部分*/}
                    <View style={styles.bottomViewStyle}>
                        {this.renderBottomItem()}
                    </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    topViewStyle:{

    },
    bottomViewStyle:{
        flexDirection:'row',
        // flexWrap:'wrap '
    },
    containerSty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});


