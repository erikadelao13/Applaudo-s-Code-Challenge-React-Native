import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { resize } from '../../utils/styles';
import React from 'react';
// screens
import Home from '../../screens/app/Home';
import Detail from '../../screens/app/Detail'
// const drawerStack = createDrawerNavigator(
//   {
//     Home: {
//       screen: Home
//     },
//   },

//   {
//     initialRouteName: 'Home',
//     contentComponent: props => <Sidebar {...props} />,
//     drawerWidth: resize(250),
//     drawerPosition: 'right',
//     defaultNavigationOptions: {
//       header: null,
//     },
//   }
// )


const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Detail: {
      screen: Detail,
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false
    },
  }
);


const appNavigator = createAppContainer(appStackNavigator);

export default appNavigator;