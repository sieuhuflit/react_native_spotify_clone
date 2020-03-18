import React from 'react';
import { shallow } from 'enzyme';
import SvgSearch from './Svg.Search';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<SvgSearch {...props} />);
  return {
    props,
    wrapper
  };
};

describe('SvgSearch check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
