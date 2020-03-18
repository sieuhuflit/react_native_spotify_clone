import React from 'react';
import { shallow } from 'enzyme';
import { AlbumsHorizontal } from './AlbumsHorizontal';

const setup = propOverrides => {
  const props = Object.assign(
    {
      data: [],
      heading: 'heading',
      tagline: 'tagline',
      navigation: {
        navigate: jest.fn()
      }
    },
    propOverrides
  );
  const wrapper = shallow(<AlbumsHorizontal {...props} />);
  return {
    props,
    wrapper
  };
};

describe('AlbumsHorizontal check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
describe('AlbumsHorizontal check render correctly', () => {
  test('should render heading and tagline when not empty', () => {
    const { wrapper } = setup();
    expect(wrapper.find('Text')).toHaveLength(2);
  });
  test('should not render heading and tagline when empty', () => {
    const { wrapper } = setup({ heading: null, tagline: null });
    expect(wrapper.find('Text')).toHaveLength(0);
  });
});
