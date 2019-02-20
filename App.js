
import Welcome from './js/Welcome.js';
import Login from './js/Login.js';
import main from './js/Main/main.js';
import { createStackNavigator, createAppContainer } from "react-navigation";

const App = createStackNavigator({
  Welcome: {screen: Welcome},
  Login: {screen: Login},
  Main: {screen: main},
}, {
  headerMode: 'none'
})

export default createAppContainer(App);