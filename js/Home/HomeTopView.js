    /**
     * Sample React Native App
     * https://github.com/facebook/react-native
     *
     * @format
     * @flow
     * @lint-ignore-every XPLATJSCOPYRIGHT1
     */

    import React, {Component} from 'react';
    import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar,TouchableOpacity,ScrollView} from 'react-native';
    import HomeTopListView from './HomeTopListView'
    var Demensions = require('Dimensions');
    //初始化宽高
    var {width, height} = Demensions.get('window');
    export default class HomeTopView extends Component<Props> {

        constructor(Props) {
            super(Props);
            const data=[[
                {"title":"美食","image":require('../../res/images/ms.png')},
                {"title":"电影","image":require('../../res/images/dy.png')},
                {"title":"酒店","image":require('../../res/images/jd.png')},
                {"title":"休闲娱乐","image":require('../../res/images/xxyl.png')},
                {"title":"外卖","image":require('../../res/images/wm.png')},
                {"title":"自助餐","image":require('../../res/images/zzc.png')},
                {"title":"KTV","image":require('../../res/images/ktv.png')},
                {"title":"火车票机票","image":require('../../res/images/hcpjp.png')},
                {"title":"丽人","image":require('../../res/images/lr.png')},
                {"title":"周边游","image":require('../../res/images/zby.png')}],[
                {"title":"足疗按摩","image":require('../../res/images/zlam.png')},
                {"title":"购物","image":require('../../res/images/gw.png')},
                {"title":"今日新单","image":require('../../res/images/jrxd.png')},
                {"title":"小吃快餐","image":require('../../res/images/xckc.png')},
                {"title":"生活服务","image":require('../../res/images/shfw.png')},
                {"title":"甜点饮品","image":require('../../res/images/tdyp.png')},
                {"title":"美甲","image":require('../../res/images/mj.png')},
                {"title":"景点门票","image":require('../../res/images/jdmp.png')},
                {"title":"旅游","image":require('../../res/images/ly.png')},
                {"title":"全部分类","image":require('../../res/images/qbfl.png')}]
                ]

            this.state={
                activePage:0,
                data:data
            }
        }

        _onScrollAnimationEnd(e){
            var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
             this.setState({
                activePage: currentPage
            })
        }
        render() {
            var _this = this;
            return (
                <View style={styles.containStyle}>
                    {/*上半部分*/}
                    <ScrollView horizontal={true}
                                pagingEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                onMomentumScrollEnd={(e)=>{_this._onScrollAnimationEnd.bind(this,e)}}
                    >
                        {this.renderScroolItem()}
                    </ScrollView>
                    <View style={styles.indicatorStyle}>

                        {this.renderIndicator()}
                    </View>
                    {/*页码部分*/}
                </View>
            );
        }

        renderIndicator(){
            var indicatorArr=[];
            for (var i = 0; i < 2; i++) {
               var style=(i === this.state.activePage)?{color:'orange'}:{color: 'gray'}
                indicatorArr.push(<Text key={i} style={[{fontSize:25},style]}>&bull;</Text>)
            }
        return indicatorArr;
        }

        renderScroolItem(){
            var itemArr = [];
            var colorArr = ['red', 'green'];
            for (var i=0;i<colorArr.length;i++){
                itemArr.push(<HomeTopListView key={i}  dataArr={this.state.data[i]}/>)
            }
            return itemArr;
        }
    }

    const styles = StyleSheet.create(
        {

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
