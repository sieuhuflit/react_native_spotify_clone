import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import ModalHeader from './ModalHeader';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<ModalHeader {...props} />);
  return {
    props,
    wrapper
  };
};

describe('ModalHeader check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ModalHeader check render correctly', () => {
  test('should render 1 Text when has text props ', () => {
    const { wrapper } = setup({
      text: 'Hi'
    });
    expect(wrapper.find('Text')).toHaveLength(1);
  });

  test('should has 2 TouchIcon when has left and right props ', () => {
    const { wrapper } = setup({
      left: <View />,
      right: <View />
    });
    expect(wrapper.find('TouchIcon')).toHaveLength(2);
  });

  test('should render 2 View when left and right props is null ', () => {
    const { wrapper } = setup({
      left: null,
      right: null
    });
    expect(
      wrapper
        .find('View')
        .at(0)
        .children()
    ).toHaveLength(2);
  });
});

describe('ModalHeader check simulate click', () => {
  test('should leftPress and rightPress work', () => {
    const { wrapper, props } = setup({
      left: <View />,
      right: <View />,
      leftPress: jest.fn(),
      rightPress: jest.fn()
    });
    wrapper
      .find('TouchIcon')
      .at(0)
      .props()
      .onPress();
    expect(props.leftPress).toBeCalledTimes(1);
    wrapper
      .find('TouchIcon')
      .at(1)
      .props()
      .onPress();
    expect(props.rightPress).toBeCalledTimes(1);
  });
});
