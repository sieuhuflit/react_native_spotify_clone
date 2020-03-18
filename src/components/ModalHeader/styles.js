import { StyleSheet } from 'react-native';
import { colors, device } from '../../constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: device.iPhoneX ? 48 : 24,
  },
  containerText: {
    alignItems: 'center',
    flex: 5,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  left: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
