import React from 'react';
import { shallow } from 'enzyme';
import SvgTabHome from './Svg.TabHome';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<SvgTabHome {...props} />);
  return {
    props,
    wrapper
  };
};

describe('SvgTabHome check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
