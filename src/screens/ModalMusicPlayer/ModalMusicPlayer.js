import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { get } from 'lodash';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors, func, globalStyles } from '../../constants';
import ModalHeader from '../../components/ModalHeader';
import TouchIcon from '../../components/TouchIcon';
import styles from './styles';

class ModalMusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: false,
      paused: true,
    };
  }

  toggleFavorite = () => {
    this.setState(prev => ({
      favorited: !prev.favorited,
    }));
  };

  togglePlay = () => {
    this.setState(prev => ({
      paused: !prev.paused,
    }));
  };

  render() {
    const { navigation, screenProps } = this.props;
    const { currentSongData, currentAlbumData } = screenProps;
    const { favorited, paused } = this.state;

    const favoriteColor = favorited ? colors.brandPrimary : colors.white;
    const favoriteIcon = favorited ? 'heart' : 'heart-o';
    const iconPlay = paused ? 'play-circle' : 'pause-circle';

    const timePast = func.formatTime(0);
    const timeLeft = func.formatTime(currentSongData.duration_ms);

    const artistName = get(currentSongData, 'artists[0].name', '');
    const albumImage = get(currentAlbumData, 'images[0].url', '');

    return (
      <View style={globalStyles.container}>
        <ModalHeader
          left={<Feather color={colors.greyLight} name="chevron-down" />}
          leftPress={() => navigation.goBack(null)}
          right={<Feather color={colors.greyLight} name="more-horizontal" />}
          text={currentSongData.name}
        />
        <View style={globalStyles.p3}>
          <Image source={{ uri: albumImage }} style={styles.image} />
          <View style={[globalStyles.flexRowSpace, styles.containerDetails]}>
            <View style={styles.containerSong}>
              <Text ellipsizeMode="tail" numberOfLines={1} style={styles.song}>
                {currentSongData.title}
              </Text>
              <Text style={styles.artist}>{artistName}</Text>
            </View>
            <View style={styles.containerFavorite}>
              <TouchIcon
                icon={<FontAwesome color={favoriteColor} name={favoriteIcon} />}
                onPress={this.toggleFavorite}
              />
            </View>
          </View>

          <View style={styles.containerVolume}>
            <Slider
              minimumValue={0}
              maximumValue={currentSongData.length}
              minimumTrackTintColor={colors.white}
              maximumTrackTintColor={colors.grey3}
            />
            <View style={styles.containerTime}>
              <Text style={styles.time}>{timePast}</Text>
              <Text style={styles.time}>{`-${timeLeft}`}</Text>
            </View>
          </View>

          <View style={styles.containerControls}>
            <TouchIcon
              icon={<Feather color={colors.greyLight} name="shuffle" />}
              onPress={() => null}
            />
            <View style={globalStyles.flexRowCenterAlign}>
              <TouchIcon
                icon={<FontAwesome color={colors.white} name="step-backward" />}
                iconSize={32}
                onPress={() => null}
              />
              <View style={globalStyles.pH3}>
                <TouchIcon
                  icon={<FontAwesome color={colors.white} name={iconPlay} />}
                  iconSize={64}
                  onPress={this.togglePlay}
                />
              </View>
              <TouchIcon
                icon={<FontAwesome color={colors.white} name="step-forward" />}
                iconSize={32}
                onPress={() => null}
              />
            </View>
            <TouchIcon
              icon={<Feather color={colors.greyLight} name="repeat" />}
              onPress={() => null}
            />
          </View>

          <View style={styles.containerBottom}>
            <TouchIcon
              icon={<Feather color={colors.greyLight} name="speaker" />}
              onPress={() => null}
            />
            <TouchIcon
              icon={<MaterialIcons color={colors.greyLight} name="playlist-play" />}
              onPress={() => null}
            />
          </View>
        </View>
      </View>
    );
  }
}

ModalMusicPlayer.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
};

export default ModalMusicPlayer;
