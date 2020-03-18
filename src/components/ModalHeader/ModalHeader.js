import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import TouchIcon from '../TouchIcon';
import styles from './styles';

const ModalHeader = ({ left, leftPress, right, rightPress, style, text }) => (
  <View style={[styles.container, style]}>
    {left && <TouchIcon icon={left} onPress={leftPress} style={styles.left} />}
    {!left && <View style={styles.left} />}
    {text && (
      <View style={styles.containerText}>
        <Text style={styles.text}>{text}</Text>
      </View>
    )}
    {right && (
      <TouchIcon icon={right} onPress={rightPress} style={styles.right} />
    )}
    {!right && <View style={styles.right} />}
  </View>
);

ModalHeader.defaultProps = {
  left: null,
  leftPress: () => null,
  right: null,
  rightPress: () => null,
  style: {},
  text: null
};

ModalHeader.propTypes = {
  left: PropTypes.element,
  leftPress: PropTypes.func,
  right: PropTypes.element,
  rightPress: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  text: PropTypes.string
};

export default ModalHeader;
