import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from './HomeScreen';

const setup = propOverrides => {
  const props = Object.assign(
    {
      fetchRecommendation: jest.fn()
    },
    propOverrides
  );
  const wrapper = shallow(<HomeScreen {...props} />);
  return {
    props,
    wrapper
  };
};

describe('HomeScreen check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('HomeScreen check life cycle', () => {
  test('should componentDidMount work', () => {
    const { wrapper, props } = setup();
    wrapper.instance().componentDidMount();
    expect(props.fetchRecommendation).toBeCalled();
  });
});
