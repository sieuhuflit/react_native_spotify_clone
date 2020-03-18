import React from 'react';
import { shallow } from 'enzyme';
import AlbumItem from './AlbumItem';

const setup = propOverrides => {
  const props = Object.assign(
    {
      data: {
        album: {
          id: 1
        }
      },
      navigation: {
        navigate: jest.fn()
      }
    },
    propOverrides
  );
  const wrapper = shallow(<AlbumItem {...props} />);
  return {
    props,
    wrapper
  };
};

describe('AlbumItem check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('AlbumItem check render correctly', () => {
  test('should display image when have images in album', () => {
    const { wrapper } = setup({
      data: {
        album: {
          id: 1,
          images: [{ url: '123' }]
        }
      }
    });
    expect(wrapper.find('Image')).toHaveLength(1);
  });
  test('should not display image when images is null', () => {
    const { wrapper } = setup({
      data: {
        album: {
          id: 1,
          images: null
        }
      }
    });
    expect(wrapper.find('Image')).toHaveLength(0);
  });
  test('should not display image when images is empty array', () => {
    const { wrapper } = setup({
      data: {
        album: {
          id: 1,
          images: []
        }
      }
    });
    expect(wrapper.find('Image')).toHaveLength(0);
  });
});

describe('AlbumItem check action', () => {
  test('should onPress button work', () => {
    const { wrapper, props } = setup();
    wrapper
      .find('TouchableOpacity')
      .props()
      .onPress();
    expect(props.navigation.navigate).toBeCalledTimes(1);
  });
});
