import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    width: '100%',
  },
  containerContent: {
    paddingLeft: 16,
  },
  heading: {
    fontSize: 18,
    color: colors.white,
    paddingBottom: 6,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 12,
    color: colors.greyInactive,
    paddingBottom: 6,
    textAlign: 'center',
  },
  item: {
    marginRight: 16,
    width: 148,
  },
  image: {
    backgroundColor: colors.greyLight,
    height: 148,
    width: 148,
  },
  title: {
    fontSize: 12,
    color: colors.white,
    marginTop: 4,
    textAlign: 'center',
  },
});

export default styles;
