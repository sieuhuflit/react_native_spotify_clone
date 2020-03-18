import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors, globalStyles } from '../../constants';
import styles from './styles';

export default class BarMusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: false,
      isPause: true,
    };
  }

  toggleFavorite = () => {
    this.setState(prev => ({
      isFavorited: !prev.isFavorited,
    }));
  };

  togglePlay = () => {
    this.setState(prev => ({
      isPause: !prev.isPause,
    }));
  };

  render() {
    const { navigation, song } = this.props;
    const { isFavorited, isPause } = this.state;
    const favoriteColor = isFavorited ? colors.brandPrimary : colors.white;
    const favoriteIcon = isFavorited ? 'heart' : 'heart-o';
    const iconPlay = isPause ? 'play-circle' : 'pause-circle';

    const songName = get(song, 'name', '');
    const artistName = get(song, 'artist[0].name', '');

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('ModalMusicPlayer')}
        style={styles.container}
      >
        <TouchableOpacity
          activeOpacity={globalStyles.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={this.toggleFavorite}
          style={styles.containerIcon}
        >
          <FontAwesome color={favoriteColor} name={favoriteIcon} size={20} />
        </TouchableOpacity>
        {song && (
          <View style={styles.containerSong}>
            <Text style={styles.title}>{`${songName} · `}</Text>
            <Text style={styles.artist}>{artistName}</Text>
          </View>
        )}
        <TouchableOpacity
          activeOpacity={globalStyles.activeOpacity}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
          onPress={this.togglePlay}
          style={styles.containerIcon}
        >
          <FontAwesome color={colors.white} name={iconPlay} size={28} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

BarMusicPlayer.defaultProps = {
  song: null,
};

BarMusicPlayer.propTypes = {
  navigation: PropTypes.object.isRequired,
  song: PropTypes.shape({
    artist: PropTypes.string,
    title: PropTypes.string,
  }),
};
