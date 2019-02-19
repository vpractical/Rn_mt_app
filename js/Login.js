import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity, ToastAndroid,
} from 'react-native'

export default class Login extends Component {
    static navigationOptions = ({navigation}) => {
        return{
            header: ()=>null,//隐藏头部
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            userName: 'ming',
            password: '123456'
        }
    }

    clickToLogin(){
        if(this.state.userName === '' || this.state.password === ''){
            ToastAndroid.show('3s', ToastAndroid.SHORT);
            return;
        }
        const {navigate} = this.props.navigation;
        navigate('Main')
    }

    render() {
        return (
            <View style={styles.root}>
                <Text
                    style={styles.title}
                    numberOfLines={1}
                >
                    Rn登录
                </Text>
                <TextInput
                    style={styles.input}
                    careHidden={false}
                    autoFocus={false}
                    maxLength={15}
                    value={this.state.userName}
                    onChangedText={(text) => {
                        this.setState({
                            userName: text
                        })
                    }}
                />
                <TextInput
                    style={styles.input}
                    careHidden={false}
                    autoFocus={false}
                    maxLength={9}
                    value={this.state.password}
                    onChangedText={(text) => {
                        this.setState({
                            password: text
                        })
                    }}
                />

                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                        this.clickToLogin()
                    }}
                >
                    <Text
                        style={styles.login}
                    >
                        登入
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    componentWillMount(): void {

    }

    componentDidMount(): void {

    }

    shouldComponentUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): boolean {

    }

    componentWillUpdate(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void {

    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {

    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {

    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {

    }

    componentWillUnmount(): void {

    }

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#03a9f4',
        paddingLeft: 20,
        paddingRight: 20,
    },

    input: {
        height: 50,
        color: 'rgb(255,0,0)',
        backgroundColor: '#ffffff',
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        textAlign: 'center',
    },

    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        marginBottom: 20,
    },

    login: {
        height: 50,
        color: 'white',
        backgroundColor: 'gray',
        marginTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
    }

});