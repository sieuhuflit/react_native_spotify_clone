import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../constants';

const TouchText = ({ onPress, style, styleText, text }) => (
  <TouchableOpacity
    activeOpacity={globalStyles.activeOpacity}
    hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
    onPress={onPress}
    style={[globalStyles.flexCenter, style]}
  >
    <Text style={styleText}>{text}</Text>
  </TouchableOpacity>
);

TouchText.defaultProps = {
  style: {},
  styleText: {}
};

TouchText.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  styleText: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
};

export default TouchText;
