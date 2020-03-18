import React from 'react';
import { shallow } from 'enzyme';
import LineItemSong from './LineItemSong';

const setup = propOverrides => {
  const props = Object.assign(
    {
      onPress: jest.fn()
    },
    propOverrides
  );
  const wrapper = shallow(<LineItemSong {...props} />);
  return {
    props,
    wrapper
  };
};

describe('LineItemSong check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('LineItemSong check render correctly', () => {
  test('should render correctly when data is null ', () => {
    const { wrapper } = setup({
      data: {
        name: 'Test'
      }
    });
    expect(
      wrapper
        .find('Text')
        .children()
        .at(0)
        .text()
    ).toEqual('Test');
  });
});

describe('LineItemSong check simulate click', () => {
  test('should onPress work', () => {
    const { wrapper, props } = setup();
    wrapper
      .find('TouchableOpacity')
      .props()
      .onPress();
    expect(props.onPress).toBeCalledTimes(1);
  });
});
