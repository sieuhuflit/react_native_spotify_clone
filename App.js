import React from 'react';
import { StatusBar } from 'react-native';
// import { AppLoading } from 'expo';
/**
 * redux
 */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Reactotron from './ReactotronConfig';
import { func } from './src/constants';
import rootReducer from './src/data';
import AppNavigation from './src/navigation/AppNavigation';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk), Reactotron.createEnhancer())
);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSongData: null,
      currentAlbumData: null,
      isLoading: true,
      toggleTabBar: false,
    };
  }

  changeSong = (songData, albumData) => {
    this.setState({
      currentSongData: songData,
      currentAlbumData: albumData,
    });
  };

  render() {
    const { currentSongData, currentAlbumData, isLoading, toggleTabBar } = this.state;

    // if (isLoading) {
    //   return (
    //     <AppLoading
    //       onFinish={() => this.setState({ isLoading: false })}
    //       startAsync={func.loadAssetsAsync}
    //     />
    //   );
    // }

    return (
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <AppNavigation
          screenProps={{
            currentSongData,
            currentAlbumData,
            changeSong: this.changeSong,
            toggleTabBarState: toggleTabBar,
          }}
        />
      </Provider>
    );
  }
}
