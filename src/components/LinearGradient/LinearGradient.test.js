import React from 'react';
import { shallow } from 'enzyme';
import LinearGradient from './LinearGradient';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<LinearGradient {...props} />);
  return {
    props,
    wrapper
  };
};

describe('LinearGradient check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
