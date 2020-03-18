import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import { colors } from '../constants';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import CustomTabBar from '../components/CustomTabBar';
import * as screenNames from './screenNames';

const BottomTabNavigator = createBottomTabNavigator(
  {
    [screenNames.HomeStack]: HomeStack,
    [screenNames.SearchStack]: SearchStack
  },
  {
    initialRouteName: screenNames.HomeStack,
    tabBarComponent: props => <CustomTabBar {...props} />,
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.greyInactive,
      style: {
        backgroundColor: colors.grey,
        borderTopWidth: 0
      }
    }
  }
);

export default BottomTabNavigator;
