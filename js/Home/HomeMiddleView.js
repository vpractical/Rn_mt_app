
import React, {Component} from 'react';
import {Platform, StyleSheet, Image,Text, TouchableOpacity,View} from 'react-native';
import CommonView from './CommonView'
import HomeMiddleCommonView from './HomeMiddleCommonView'
var Demensions = require('Dimensions');
//初始化宽高
var {width, height} = Demensions.get('window');
export default class HomeMiddleView extends Component<Props> {

    constructor(props) {
        super(props);
        this.state={
          rightData:[{"title":"天天特价","subTitle":"特惠不打烊",rightImage:require('../../res/images/tttj.png'),"titleColor":"orange"},
                {"title":"一元吃","subTitle":"一元吃美食",rightImage:require('../../res/images/yyms.png'),"titleColor":"red"}]

    }
    }
    renderRightView(){
        var itemArr = [];
        var rightData=[{"title":"天天特价","subTitle":"特惠不打烊",rightImage:require('../../res/images/tttj.png'),"titleColor":"orange"},
            {"title":"一元吃","subTitle":"一元吃美食",rightImage:require('../../res/images/yyms.png'),"titleColor":"red"}];
        for (var i = 0; i <rightData.length; i++) {
            var data =rightData[i];
            itemArr.push(<HomeMiddleCommonView
            title={data.title}
            subTitle={data.subTitle}
            rightIcon={data.rightImage}
            titleColor={data.titleColor}
            key={i}
            />)
        }
        return itemArr;
    }

    render() {
        return (
            <View style={styles.containerSty}>
                {/*左边*/}
                {this.renderLeftView()}
            {/*右边*/}
                {this.renderRightView()}
            </View>
        );
    }

    renderLeftView() {
        var data = this.state.rightData[0];
        return(
            <TouchableOpacity>
            <View style={styles.leftViewStyle}>

            <Image source={{uri:data.img1}} style={styles.leftImageStyle}/>
            <Image source={{uri:data.img2}} style={styles.leftImageStyle}/>
            <Text style={{color:'gray'}}>{data.title}</Text>
            <View style={{flexDirection:'row',marginTop:5}}>
                <Text style={{color:'blue',marginLeft:5}}>{data.price}</Text>
                <Text style={{color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
            </View>
        </View>
            </TouchableOpacity>
                )
    }
}

const styles = StyleSheet.create({
    containerSty:{
        marginTop:10,
        flexDirection: "row",


    },
    leftImageStyle:{
        width: 44,
        height: 30,
        resizeMode: 'contain'
    },
    leftViewStyle:{
        width:width*0.5,
        height:119,
        backgroundColor:'white',
        marginRight:1,
        alignItems:'center',
    }

});


