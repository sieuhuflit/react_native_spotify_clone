import React from 'react';
import { shallow } from 'enzyme';
import SvgTabSearch from './Svg.TabSearch';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<SvgTabSearch {...props} />);
  return {
    props,
    wrapper
  };
};

describe('SvgTabSearch check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
