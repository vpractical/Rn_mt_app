import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Image, StatusBar} from 'react-native';
import HomeDetail from './HomeDetail';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');
export default class Home extends Component<Props> {
    _pressButton() {
        const {navigator} = this.props;
        if (navigator) {
            //startActivity
            navigator.push({
                name: "详情页面",
                component: HomeDetail
            })
        }
    }

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor='rgba(255,96,0,1.0)'
                    barStyle="light-content"
                />
                {this.renderNavBar()}
                <Text onPress={this._pressButton.bind(this)}>
                    {/*首页导航栏*/}
                    Main页面
                </Text>
            </View>
        );
    }

    renderNavBar() {
        return (
            <View style={styles.navBarStyle}>
                <Text>
                    长沙
                </Text>
                <TextInput
                    placeholder="养生" style={styles.topInputStyle}
                >
                </TextInput>

                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../res/images/icon_homepage_message.png')} style={styles.navRightImg}/>
                    <Image source={require('../../res/images/icon_homepage_scan.png')} style={styles.navRightImg}/>
                </View>
            </View>
        )


    }
}

const styles = StyleSheet.create({
    navBarStyle: {
        backgroundColor: 'rgba(255,96,0,1.0)',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'relative',
        top: -10

    },
    navRightImg: {
        width: 25,
        height: 25
    },
    topInputStyle: {
        width: width * 0.6,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingLeft: 10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
