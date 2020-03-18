import React from 'react';
import { shallow } from 'enzyme';
import BarMusicPlayer from './BarMusicPlayer';

const setup = propOverrides => {
  const props = Object.assign(
    {
      navigation: {
        navigate: jest.fn()
      }
    },
    propOverrides
  );
  const wrapper = shallow(<BarMusicPlayer {...props} />);
  return {
    props,
    wrapper
  };
};

describe('BarMusicPlayer check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('BarMusicPlayer check simulate click', () => {
  test('should onPress button work', () => {
    const { wrapper, props } = setup();
    wrapper
      .find('TouchableOpacity')
      .at(0)
      .props()
      .onPress();
    expect(props.navigation.navigate).toBeCalledTimes(1);
  });
});
