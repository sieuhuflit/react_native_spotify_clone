import React from 'react';
import { shallow } from 'enzyme';
import TouchText from './TouchText';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<TouchText {...props} />);
  return {
    props,
    wrapper
  };
};

describe('TouchText check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('TouchText check render correctly', () => {
  test('should contain 1 TouchableOpacity and 1 Text display ', () => {
    const { wrapper } = setup();
    expect(wrapper.find('TouchableOpacity')).toHaveLength(1);
    expect(wrapper.find('Text')).toHaveLength(1);
  });
});

describe('TouchText check simulate', () => {
  test('should TouchableOpacity onPress work ', () => {
    const { wrapper, props } = setup({
      onPress: jest.fn()
    });
    wrapper
      .find('TouchableOpacity')
      .props()
      .onPress();
    expect(props.onPress).toBeCalledTimes(1);
  });
});
