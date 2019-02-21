import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar} from 'react-native';
import Main from './Main/main';

let Dimensions = require('Dimensions');
let {width, height} = Dimensions.get('window');

export default class Launcher extends Component<Props>{

    componentDidMount(): void {
        setTimeout(()=>{
            this.props.navigator.replace({component: Main})
        },5000)
    }

    render(): React.ReactNode {
        return (
            <View>
                <StatusBar
                    backgroundColor='rgba(0,0,0,0.0)'
                    hidden={true}
                />

                <Image source={require('../res/images/launcher.png')} style={styles.launchImageStyle}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    launchImageStyle:{
        width:width,
        height:height,
        //不加这句，就是按照屏幕高度自适应
        //加上这几，就是按照屏幕自适应（拉伸整个屏幕）
        resizeMode:'cover',
        //祛除内部元素的白色背景
        backgroundColor:'rgba(0,0,0,0)',
    }
});
