import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import SearchScreen from '../screens/SearchScreen';
import SvgTabSearch from '../components/icons/Svg.TabSearch';
import * as screenNames from './screenNames';

const Icon = ({ focused }) => <SvgTabSearch active={focused} />;

Icon.propTypes = {
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    [screenNames.SearchScreen]: {
      screen: SearchScreen
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: Icon
    }
  }
);
