

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity,ScrollView,ListView} from 'react-native';
var Demensions = require('Dimensions');
//初始化宽高
var {width, height} = Demensions.get('window');
var cols = 5;

export default class HomeTopListView extends Component<Props> {

    constructor(Props) {
        super(Props);
        var ds=new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        this.state={
            dataSource :ds.cloneWithRows(this.props.dataArr)
        }
    }

    render() {
        return (
            <ListView
                scrollEnabled={false}
                dataSource={this.state.dataSource}
                contentContainerStyle={styles.contentViewStyle}
                renderRow={(rowData) => <TouchableOpacity onPress={()=>{}}><View style={styles.cellStyle}><Text>{rowData.title}</Text><Image style={{width:60,height:60}} source={rowData.image}/></View></TouchableOpacity>}/>
        )
    }


}

const styles = StyleSheet.create(
    {

        cellStyle:{
            width:80,
            height:80,
            alignItems:'center',
            justifyContent:'center',
            marginTop: 10,
        },
        contentViewStyle:{
            flexDirection:'row',
            flexWrap:'wrap',
            width:width,
        },

        indicatorStyle:{
            flexDirection:'row',
            justifyContent:'center'

        },
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
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#F5FCFF'
        }
    });
