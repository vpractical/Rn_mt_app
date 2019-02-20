import React,{Component,PureComponent} from 'react'
import {Text,TouchableOpacity,View} from 'react-native'
export default  class Parent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    // 父组件定义的方法
    onClickSon = (msgFromSon) => {
        console.log(msgFromSon)
    }
    render() {
        return (
            <Son onClickSon={this.onClickSon}/>
        )
    }
}
//PureComponent   Component
class Son extends PureComponent {
    render() {
        return (
            <TouchableOpacity onPress={()=> this.props.onClickSon('I am your son')}>
                    <Text>david</Text>
            </TouchableOpacity>
        )
    }
}