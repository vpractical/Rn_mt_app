
import Welcome from './js/Welcome';
import Login from './js/Login';
import { createStackNavigator, createAppContainer } from "react-navigation";

const App = createStackNavigator({
  Welcome: {screen: Welcome},
  Login: {screen: Login},
}, {
  headerMode: 'none'
})

export default createAppContainer(App);