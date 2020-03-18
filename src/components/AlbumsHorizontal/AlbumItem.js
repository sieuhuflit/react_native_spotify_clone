import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../constants';
import styles from './styles';

const AlbumItem = ({ data, navigation }) => {
  const albumId = get(data, 'album.id');
  const albumName = get(data, 'album.name', '');
  const albumImage = get(data, 'album.images[0].url', '');

  return (
    <TouchableOpacity
      activeOpacity={globalStyles.activeOpacity}
      hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
      onPress={() =>
        navigation.navigate('AlbumScreen', { id: albumId, title: albumName })
      }
      style={styles.item}
    >
      <View style={styles.image}>
        {albumImage && albumImage !== '' && (
          <Image source={{ uri: albumImage }} style={styles.image} />
        )}
      </View>
      <Text style={styles.title}>{albumName}</Text>
    </TouchableOpacity>
  );
};

AlbumItem.propTypes = {
  data: PropTypes.shape({
    album: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      images: PropTypes.array
    })
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

AlbumItem.defaultProps = {
  data: {
    album: {
      name: '',
      images: []
    }
  }
};
export default AlbumItem;
