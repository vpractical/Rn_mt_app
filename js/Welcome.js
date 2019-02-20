import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid,
} from 'react-native'

let countDown;

export default class Welcome extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            header: () => null,
        }
    }

    constructor(props) {
        super(props);
    }

    render(): React.ReactNode {
        return <View style={styles.root}>
            <Text style={styles.welcome}>
                welcome Y
            </Text>
        </View>;
    }

    componentWillMount(): void {0
        console.log("启动页：安装");
        const {navigate} = this.props.navigation;
        ToastAndroid.show('3s', ToastAndroid.SHORT);
        countDown = setTimeout(() => {
            console.log("导航到登录页")
            // navigate('Login')
            navigate('Main')
        },2000);
    }

    componentWillUnmount(): void {
        console.log("启动页：卸载");
        clearTimeout(countDown)
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 50,
        color: '#85aa12',
    },
})