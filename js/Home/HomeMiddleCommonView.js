
import React, {Component} from 'react';
import {Platform, Image,StyleSheet, Text, View,TouchableOpacity} from 'react-native';
var Demensions = require('Dimensions');
//初始化宽高
var {width, height} = Demensions.get('window');
export default class HomeMiddleCommonView extends Component<Props> {
    static defaultProps={
        title:"",
        subTitle:"",
        rightIcon:undefined,
        titleColor:"",
    }
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <TouchableOpacity onPress={()=>{alert("点击了")}}>
                <View style={styles.containerSty}>
                    <View>
                        <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                        <Text style={styles.subTitltStyle}>{this.props.subTitle}</Text>
                    </View>
                    <Image source={this.props.rightIcon} style={{width:64,height:43}}/>
                </View>
            </TouchableOpacity>

        );
    }

    renderLeftView() {

    }
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
    },


    subTitltStyle:{
        color:'gray'
    },
    containerSty:{
        backgroundColor:'white',
        width:width*0.5-1,
        height:60,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        marginRight:1
    }

});


