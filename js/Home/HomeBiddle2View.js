import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar,ListView} from 'react-native';
import HomeMiddleCommonView from "./HomeMiddleCommonView";


var Dimensions =require('Dimensions')
var {width, height} = Dimensions.get('window');

export default class HomeMiddle2View extends Component<Props>{
    constructor(Props){
        super(Props);
        this.state = {
            rightData:[{"title":"天天特价","subTitle":"特惠不打烊",
                img1:require('../../res/images/tttj.png'),
                rightImage:require('../../res/images/tttj.png'),
                "titleColor":"orange"},
                {"title":"一元吃","subTitle":"一元吃美食",
                    img1:require('../../res/images/tttj.png')
                    ,rightImage:require('../../res/images/yyms.png'),
                    "titleColor":"red"}]
        }
    }


    render(): React.ReactNode {
        return (<View style = {styles.root}>
                {this._leftComponent()}
                {this._rightComponent()}
            </View>
            );
    }

    _leftComponent(){
        var data ={img1:require('../../res/images/mdqg.png'),img2:require('../../res/images/yyms.png')}
        return (<View style = {styles.left}>
            <Image source={data.img1} style={styles.leftImageStyle}/>
            <Image source={data.img2} style={{width: 44,height:30}}/>
            <Text>水煮鱼</Text>
            <Text>8.5</Text>
        </View>)
    }

    _rightComponent(){
        let itemArr = []
        for (var i = 0; i <this.state.rightData.length; i++) {
            var data =this.state.rightData[i];
            itemArr.push(<HomeMiddleCommonView
                title={data.title}
                subTitle={data.subTitle}
                rightIcon={data.rightImage}
                titleColor={data.titleColor}
                key={i}
            />)
        }
        return (<View style = {styles.right}>
            {itemArr}
        </View>)
    }

}

const styles = StyleSheet.create({
    root:{
        flexDirection: 'row',
    },
    left:{
        width: width*0.5,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor:'white',
        alignItems: 'center',
    },
    leftImageStyle:{
        width: 129,
        height: 42,
        marginTop: 10
    },
    right:{
      flexDirection: 'column',
    }

})