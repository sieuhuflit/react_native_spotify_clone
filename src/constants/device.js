import { Dimensions, Platform } from 'react-native';

const android = Platform.OS === 'android';
const iOS = Platform.OS === 'ios';
const web = Platform.OS === 'web';
const windowInfo = Dimensions.get('window');
const { height, width } = windowInfo;
const aspectRatio = height / width;
const { isPad } = Platform;

let iPhoneX = false;
if (iOS) {
  if (height === 812 || width === 812 || height === 896 || width === 896) {
    iPhoneX = true;
  }
}

export default {
  android,
  aspectRatio,
  height,
  iOS,
  iPhoneX,
  isPad,
  web,
  width
};
