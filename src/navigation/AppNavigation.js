import { createAppContainer, createStackNavigator } from 'react-navigation';
import TransitionConfig from './TransitionConfig';
import TabNavigation from './TabNavigation';
import LoginScreen from '../screens/LoginScreen';
import ModalMusicPlayer from '../screens/ModalMusicPlayer';
import * as screenNames from './screenNames';

const StackNavigator = createStackNavigator(
  {
    [screenNames.LoginScreen]: LoginScreen,
    [screenNames.TabNavigation]: TabNavigation,
    [screenNames.ModalMusicPlayer]: {
      screen: ModalMusicPlayer,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    initialRouteName: screenNames.LoginScreen,
    mode: 'modal',
    transitionConfig: TransitionConfig,
    transparentCard: true
  }
);

const AppNavigation = createAppContainer(StackNavigator);

export default AppNavigation;
