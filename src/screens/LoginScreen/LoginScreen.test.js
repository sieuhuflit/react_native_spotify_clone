import React from 'react';
import { shallow } from 'enzyme';
import LoginScreen from './LoginScreen';

const setup = propOverrides => {
  const props = Object.assign(
    {
      getToken: jest.fn(),
      navigation: {
        navigate: jest.fn()
      }
    },
    propOverrides
  );
  const wrapper = shallow(<LoginScreen {...props} />);
  return {
    props,
    wrapper
  };
};

describe('LoginScreen check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('LoginScreen check simulate click', () => {
  test('should onPressLogin work', () => {
    const { wrapper, props } = setup();
    wrapper
      .find('TouchText')
      .props()
      .onPress();
    expect(props.getToken).toBeCalledTimes(1);
  });
});
