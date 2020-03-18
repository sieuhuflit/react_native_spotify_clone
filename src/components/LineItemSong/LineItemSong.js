import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { get } from 'lodash';
import Feather from 'react-native-vector-icons/Feather';
import { colors, globalStyles } from '../../constants';
import styles from './styles';

const LineItemSong = ({ active, onPress, data }) => {
  const songName = get(data, 'name', '');
  const artistName = get(data, 'artists[0].name', '');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={globalStyles.activeOpacity}
        onPress={() => onPress(data)}
        style={globalStyles.flex5}
      >
        <Text style={[styles.title, { color: active ? colors.brandPrimary : colors.white }]}>
          {songName}
        </Text>
        <View style={globalStyles.flexRow}>
          <Text style={styles.artist}>{artistName}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.containerRight}>
        <Feather color={colors.greyLight} name="more-horizontal" size={20} />
      </View>
    </View>
  );
};

LineItemSong.propTypes = {
  onPress: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    artists: PropTypes.array,
  }),
  active: PropTypes.bool,
};

LineItemSong.defaultProps = {
  active: false,
  data: {
    name: '',
    artists: [],
  },
};

export default LineItemSong;
