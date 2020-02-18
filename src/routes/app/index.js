import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { SafeAreaView } from 'react-native';
import { resize } from '../../utils/styles';
import React from 'react';
// screens
import Home from '../../screens/app/Home';
import Detail from '../../screens/app/Detail';
import Favorites from '../../screens/app/Favorites'
//custom
import NavBarBottom from '../../components/BottomNavBar';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Favorites: {
      screen: Favorites,
    },
  },
  {
    tabBarComponent: props => (
      <SafeAreaView>
        <NavBarBottom {...props} />
      </SafeAreaView>
    ),
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.darkTextLight,
      labelStyle: {
        fontFamily: fonts.notoBold,
        fontSize: resize(10),
        fontWeight: '700',
        letterSpacing: 0.12,
      },
      style: {
        backgroundColor: colors.backgroundColorApp,
      },
    },
    animationEnabled: false,
    swipeEnabled: false,
    lazy: true,
    initialRouteName: 'Home',
  },
);

const appStackNavigator = createStackNavigator(
  {
    Home: {
      screen: bottomTabNavigator,
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