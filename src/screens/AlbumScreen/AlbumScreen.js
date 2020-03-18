import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Alert, Image, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { get } from 'lodash';
import { colors, device, globalStyles } from '../../constants';
import LinearGradient from '../../components/LinearGradient';
import LineItemSong from '../../components/LineItemSong';
import TouchIcon from '../../components/TouchIcon';
import TouchText from '../../components/TouchText';

import styles from './styles';

class AlbumScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    const { navigation, fetchAlbum } = this.props;
    const albumId = navigation.getParam('id');
    fetchAlbum(albumId);
  }

  componentWillUnmount() {
    const { resetAlbumDetail } = this.props;
    resetAlbumDetail();
  }

  changeSong = songData => {
    const {
      screenProps: { changeSong },
      albumDetail,
    } = this.props;
    changeSong(songData, albumDetail);
  };

  render() {
    const { navigation, albumDetail, screenProps } = this.props;
    const { scrollY } = this.state;
    if (albumDetail === null) {
      return <View style={[globalStyles.container, globalStyles.flexCenter]} />;
    }
    const { currentSongData } = screenProps;
    const albumName = get(albumDetail, 'name', '');
    const releaseDate = get(albumDetail, 'release_date', '');
    const artistName = get(albumDetail, 'artist[0].name', '');
    const albumImage = get(albumDetail, 'images[0].url', '');

    const stickyArray = device.web ? [] : [0];
    const headingRange = device.web ? [140, 200] : [230, 280];
    const shuffleRange = device.web ? [40, 80] : [40, 80];

    const opacityHeading = scrollY.interpolate({
      inputRange: headingRange,
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    const opacityShuffle = scrollY.interpolate({
      inputRange: shuffleRange,
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={globalStyles.container}>
        <View style={styles.containerHeader}>
          <Animated.View style={[styles.headerLinear, { opacity: opacityHeading }]}>
            <LinearGradient fill="#363230" height={89} />
          </Animated.View>
          <View style={styles.header}>
            <TouchIcon
              icon={<Feather color={colors.white} name="chevron-left" />}
              onPress={() => navigation.goBack(null)}
            />
            <Animated.View style={{ opacity: opacityShuffle }}>
              <Text style={styles.headerTitle}>{albumName}</Text>
            </Animated.View>
            <TouchIcon
              icon={<Feather color={colors.white} name="more-horizontal" />}
              onPress={() => Alert.alert('Setting')}
            />
          </View>
        </View>

        <View style={styles.containerFixed}>
          <View style={styles.containerLinear}>
            <LinearGradient fill="#363230" />
          </View>
          <View style={styles.containerImage}>
            <Image source={{ uri: albumImage }} style={styles.image} />
          </View>
          <View style={styles.containerTitle}>
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
              {albumName}
            </Text>
          </View>
          <View style={styles.containerAlbum}>
            <Text style={styles.albumInfo}>{`Album by ${artistName} · ${releaseDate}`}</Text>
          </View>
        </View>

        <Animated.ScrollView
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
            useNativeDriver: true,
          })}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={stickyArray}
          style={styles.containerScroll}
        >
          <View style={styles.containerSticky}>
            <Animated.View style={[styles.containerStickyLinear, { opacity: opacityShuffle }]}>
              <LinearGradient fill={colors.black20} height={50} />
            </Animated.View>
            <View style={styles.containerShuffle}>
              <TouchText
                onPress={() => null}
                style={styles.btn}
                styleText={styles.btnText}
                text="Shuffle Play"
              />
            </View>
          </View>
          <View style={styles.containerSongs}>
            {albumDetail.tracks &&
              albumDetail.tracks.items &&
              albumDetail.tracks.items.map((track, index) => (
                <LineItemSong
                  active={currentSongData && currentSongData === track.name}
                  key={index.toString()}
                  onPress={this.changeSong}
                  data={track}
                />
              ))}
          </View>
          <View style={globalStyles.spacer16} />
        </Animated.ScrollView>
      </View>
    );
  }
}

AlbumScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired,
  fetchAlbum: PropTypes.func.isRequired,
  resetAlbumDetail: PropTypes.func.isRequired,
  albumDetail: PropTypes.object,
};

AlbumScreen.defaultProps = {
  albumDetail: null,
};

export default AlbumScreen;
