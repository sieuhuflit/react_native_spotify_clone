import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import AlbumItem from './AlbumItem';

export const AlbumsHorizontal = ({ data, heading, navigation, tagline }) => (
  <View style={styles.container}>
    {heading && <Text style={styles.heading}>{heading}</Text>}
    {tagline && <Text style={styles.tagline}>{tagline}</Text>}
    <FlatList
      contentContainerStyle={styles.containerContent}
      data={data}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => (
        <AlbumItem data={item} navigation={navigation} />
      )}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

AlbumsHorizontal.defaultProps = {
  heading: null,
  tagline: null
};

AlbumsHorizontal.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  heading: PropTypes.string,
  tagline: PropTypes.string
};

export default withNavigation(AlbumsHorizontal);
