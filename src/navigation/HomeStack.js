import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AlbumScreen from '../screens/AlbumScreen';
import SvgTabHome from '../components/icons/Svg.TabHome';
import * as screenNames from './screenNames';

const Icon = ({ focused }) => <SvgTabHome active={focused} />;

Icon.propTypes = {
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    [screenNames.HomeScreen]: HomeScreen,
    [screenNames.AlbumScreen]: AlbumScreen
  },
  {
    headerMode: 'none',
    initialRouteName: screenNames.HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: Icon
    }
  }
);
