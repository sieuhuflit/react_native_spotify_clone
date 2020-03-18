import { StyleSheet } from 'react-native';
import { colors, device, globalStyles } from '../../constants';

const styles = StyleSheet.create({
  image: {
    height: device.width - 48,
    marginVertical: device.iPhoneX ? 36 : 8,
    width: device.width - 48,
  },
  containerDetails: {
    marginBottom: 16,
  },
  containerSong: {
    flex: 6,
  },
  song: {
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.white,
  },
  artist: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.greyInactive,
  },
  containerFavorite: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
  },
  containerTime: {
    ...globalStyles.flexRowSpace,
  },
  time: {
    fontSize: 10,
    color: colors.greyInactive,
  },
  containerControls: {
    ...globalStyles.flexRowSpace,
    marginTop: device.iPhoneX ? 24 : 8,
  },
  containerBottom: {
    ...globalStyles.flexRowSpace,
    marginTop: device.iPhoneX ? 32 : 8,
  },
});

export default styles;
