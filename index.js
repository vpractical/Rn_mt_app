import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// import App from './App';
// AppRegistry.registerComponent(appName, () => App);

/**
 * 2.21
 */
import React, { Component } from 'react';
import Launcher from './js/Launcher';
import {Navigator} from "react-native-deprecated-custom-components"
class MeiTuan extends  Component{
    render(): React.ReactNode {
        return <Navigator
            initialRoute={{
                name:"启动页",
                component: Launcher
            }}
            renderScene={(router, navigator) => {
                let Component = router.component;
                return <Component {...router.params} navigator={navigator}/>;

            }
            }
        />;
    }

}
AppRegistry.registerComponent(appName, () => MeiTuan);
