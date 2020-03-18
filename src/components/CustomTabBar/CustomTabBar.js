import React from 'react';
import PropTypes from 'prop-types';
import { BottomTabBar } from 'react-navigation';
import BarMusicPlayer from '../BarMusicPlayer';

const CustomTabBar = props => {
  const {
    screenProps: { currentSongData }
  } = props;

  return (
    <React.Fragment>
      {currentSongData && <BarMusicPlayer song={currentSongData} />}
      <BottomTabBar {...props} />
    </React.Fragment>
  );
};

CustomTabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
};

export default CustomTabBar;
