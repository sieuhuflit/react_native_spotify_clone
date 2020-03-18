import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%',
  },
  title: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 4,
  },
  circleDownloaded: {
    alignItems: 'center',
    backgroundColor: colors.brandPrimary,
    borderRadius: 7,
    height: 14,
    justifyContent: 'center',
    marginRight: 8,
    width: 14,
  },
  artist: {
    fontSize: 12,
    color: colors.greyInactive,
  },
  containerRight: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default styles;
