import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import TouchIcon from './TouchIcon';

const setup = propOverrides => {
  const props = Object.assign(
    {
      icon: <View />,
      onPress: jest.fn()
    },
    propOverrides
  );
  const wrapper = shallow(<TouchIcon {...props} />);
  return {
    props,
    wrapper
  };
};

describe('TouchIcon check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TouchIcon check render correctly', () => {
  test('should contain 1 TouchableOpacity ', () => {
    const { wrapper } = setup();
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
  });
});

describe('TouchIcon check simulate click', () => {
  test('should onPress work', () => {
    const { wrapper, props } = setup();
    wrapper
      .find('TouchableOpacity')
      .props()
      .onPress();
    expect(props.onPress).toBeCalledTimes(1);
  });
});
