/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity} from 'react-native';
var Demensions = require('Dimensions');
//初始化宽高
var {width, height} = Demensions.get('window');
export default class MoreHeader extends Component<Props> {

    static defaultProps = {
        leftIconName:undefined,
        leftTitle: '',
        rightIconName:undefined,
        rightTitle: ''
    }
    renderTopView(){
            return (
                <View style={styles.topViewStyleView}>
                    <Image source={require('../../res/images/see.png')} style={styles.leftIconStyle}/>
                    <View style={styles.centerViewStyle}>
                        <Text style={{fontSize:18,color:'white',fontWeight: 'bold'}}>
                            David
                        </Text>
                        <Image source={require('../../res/images/avatar_vip.png')} style={{width:17, height: 17}}/>
                    </View>

                    {/*右边箭头*/}
                    <Image source={require('../../res/images/icon_cell_rightarrow.png')} style={{width:8,height:13,
                        marginRight: 8}}/>

                </View>
            )
    }
    renderBottomView(){
        return (<View style={styles.bottomViewStyle}>
            {this.renderBottomItem()}
        </View>)
    }
    renderBottomItem(){
        var itemArr = [];
        var data=[{'number':'100','title':'David券'},{'number':'12','title':'评价'},{'number':'收藏','title':'50'}]
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            itemArr.push(
                <TouchableOpacity key={i}>
            <View  style={styles.bottomInnerViewStyle}>
                <Text style={{color:'white'}}>{item.number}</Text>
                <Text  style={{color:'white'}}>{item.title}</Text>
            </View>
                </TouchableOpacity>
            );
        }
        return itemArr;
    }
    render() {

        return (
            <View style={styles.containStyle}>
                {/*上边*/}
                {this.renderTopView()}
                {this.renderBottomView()}
             </View>
        );
    }


}

const styles = StyleSheet.create(
    {
        bottomInnerViewStyle:{
            width:(width/3)+1,
            height:40,
            backgroundColor:'rgba(255,255,255,0.4)',
            justifyContent: 'center',
            alignItems:'center',
            borderRightWidth:1,
            borderRightColor:'white'
        },

        centerViewStyle:{
            flexDirection: 'row',
            width:width*0.72
        },
        topViewStyleView:{
            flexDirection: 'row',
            marginTop: 30,
            alignItems: 'center',
            justifyContent:'space-around'

        },
        leftIconStyle:{
            width:70,
            height:70,
            borderRadius: 35,
            borderWidth:3,
            borderColor:'rgba(0,0,0,0.2)'
        },
        bottomViewStyle:{
            flexDirection:'row',
            position:'absolute',
            bottom:0,
        },
    leftImgStyle:{
        width:30,
        height:30,
        marginLeft:6,
        borderRadius:12
    }
    ,
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
    },

    containStyle:{
        height:150,
        backgroundColor: 'rgba(255,96,0,1.0)',
    }
});
