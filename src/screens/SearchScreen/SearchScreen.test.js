import React from 'react';
import { shallow } from 'enzyme';
import SearchScreen from './SearchScreen';

const setup = propOverrides => {
  const props = Object.assign({}, propOverrides);
  const wrapper = shallow(<SearchScreen {...props} />);
  return {
    props,
    wrapper
  };
};

describe('SearchScreen check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
