import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import Login from '../../screens/auth/login';
const authStackNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const authNavigator = createAppContainer(authStackNavigator);

export default authNavigator;
