import React from 'react';
import { shallow } from 'enzyme';
import CustomTabBar from './CustomTabBar';

const setup = propOverrides => {
  const props = Object.assign(
    {
      screenProps: {
        customSongData: {
          name: 'hi'
        }
      }
    },
    propOverrides
  );
  const wrapper = shallow(<CustomTabBar {...props} />);
  return {
    props,
    wrapper
  };
};

describe('CustomTabBar check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
