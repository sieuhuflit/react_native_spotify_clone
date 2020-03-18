import React from 'react';
import { shallow } from 'enzyme';
import ModalMusicPlayer from './ModalMusicPlayer';

const setup = propOverrides => {
  const props = Object.assign(
    {
      screenProps: {
        currentSongData: {
          id: 1
        }
      }
    },
    propOverrides
  );
  const wrapper = shallow(<ModalMusicPlayer {...props} />);
  return {
    props,
    wrapper
  };
};

describe('ModalMusicPlayer check snapshot', () => {
  test('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
