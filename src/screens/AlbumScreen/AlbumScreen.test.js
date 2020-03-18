import React from 'react';
import { shallow } from 'enzyme';
import AlbumScreen from './AlbumScreen';

const setup = propOverrides => {
  const props = Object.assign(
    {
      fetchAlbum: jest.fn(),
      currentSongData: {
        id: 1,
        name: 'song name'
      },
      resetAlbumDetail: jest.fn(),
      screenProps: {
        changeSong: jest.fn()
      },
      navigation: {
        navigate: jest.fn(),
        getParam: jest.fn()
      },
      albumDetail: {
        id: 1
      }
    },
    propOverrides
  );
  const wrapper = shallow(<AlbumScreen {...props} />);
  return {
    props,
    wrapper
  };
};

describe('AlbumScreen check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('AlbumScreen check life cycle', () => {
  test('should componentDidMount work', () => {
    const { wrapper, props } = setup();
    wrapper.instance().componentDidMount();
    expect(props.fetchAlbum).toBeCalled();
  });
  test('should reset album detail work', () => {
    const { wrapper, props } = setup();
    wrapper.instance().componentWillUnmount();
    expect(props.resetAlbumDetail).toBeCalled();
  });
  test('should change instance song work', () => {
    const { wrapper, props } = setup();
    wrapper.instance().changeSong({ id: 1 });
    expect(props.screenProps.changeSong).toBeCalled();
  });
});
