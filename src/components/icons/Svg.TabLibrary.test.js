import React from 'react';
import { shallow } from 'enzyme';
import SvgTabLibrary from './Svg.TabLibrary';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<SvgTabLibrary {...props} />);
  return {
    props,
    wrapper
  };
};

describe('SvgTabLibrary check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
