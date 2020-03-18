import { StyleSheet } from 'react-native';
import { colors, device, globalStyles } from '../../constants';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.grey,
    borderBottomColor: colors.blackBg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    width: '100%',
  },
  containerIcon: {
    ...globalStyles.flexCenter,
    width: 50,
  },
  containerSong: {
    ...globalStyles.flexRowCenter,
    overflow: 'hidden',
    width: device.width - 100,
  },
  title: {
    fontSize: 12,
    color: colors.white,
  },
  artist: {
    fontSize: 12,
    color: colors.greyLight,
  },
  device: {
    fontSize: 10,
    color: colors.brandPrimary,
    marginLeft: 4,
    textTransform: 'uppercase',
  },
});

export default styles;
