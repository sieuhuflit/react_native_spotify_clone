import { StyleSheet } from 'react-native';
import { colors, device } from '../../constants';

const styles = StyleSheet.create({
  containerHeader: {
    height: 89,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 100,
  },
  headerLinear: {
    height: 89,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: device.iPhoneX ? 48 : 24,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  headerTitle: {
    fontSize: 16,
    color: colors.white,
    paddingHorizontal: 8,
    marginTop: 2,
    textAlign: 'center',
    width: device.width - 100,
  },
  containerFixed: {
    alignItems: 'center',
    paddingTop: device.iPhoneX ? 94 : 60,
    position: 'absolute',
    width: '100%',
  },
  containerLinear: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: device.web ? 5 : 0,
  },
  containerImage: {
    shadowColor: colors.black,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    zIndex: device.web ? 20 : 0,
  },
  image: {
    height: 148,
    marginBottom: device.web ? 0 : 16,
    width: 148,
  },
  containerTitle: {
    marginTop: device.web ? 8 : 0,
    zIndex: device.web ? 20 : 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    paddingHorizontal: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
  containerAlbum: {
    zIndex: device.web ? 20 : 0,
  },
  albumInfo: {
    fontSize: 12,
    color: colors.greyInactive,
    marginBottom: 48,
  },
  containerScroll: {
    paddingTop: 89,
  },
  containerSticky: {
    marginTop: device.iPhoneX ? 238 : 194,
  },
  containerShuffle: {
    alignItems: 'center',
    height: 50,
    shadowColor: colors.blackBg,
    shadowOffset: { height: -10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  containerStickyLinear: {
    top: 0,
    position: 'absolute',
    width: '100%',
  },
  btn: {
    backgroundColor: colors.brandPrimary,
    borderRadius: 25,
    height: 50,
    width: 220,
  },
  btnText: {
    fontSize: 16,
    color: colors.white,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  containerSongs: {
    alignItems: 'center',
    backgroundColor: colors.blackBg,
    minHeight: 540,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%',
  },
  downloadText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
