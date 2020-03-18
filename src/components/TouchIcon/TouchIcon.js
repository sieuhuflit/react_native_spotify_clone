import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { globalStyles } from '../../constants';

const TouchIcon = ({ icon, iconSize, onPress, style }) => (
  <TouchableOpacity
    activeOpacity={globalStyles.activeOpacity}
    onPress={onPress}
    hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
    style={[globalStyles.flexCenter, style]}
  >
    {React.cloneElement(icon, { size: iconSize })}
  </TouchableOpacity>
);

TouchIcon.defaultProps = {
  iconSize: 24,
  style: {}
};

TouchIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  iconSize: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])
};

export default TouchIcon;
