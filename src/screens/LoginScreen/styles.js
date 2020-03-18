import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  logoWrapper: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    alignSelf: 'center',
    height: 80,
    width: 80,
    marginRight: 20,
  },
  logoText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 45,
    fontWeight: 'bold',
  },
  loginButtonWrapper: {
    flex: 0.2,
    alignItems: 'center',
    height: 50,
    shadowColor: colors.blackBg,
    shadowOffset: { height: -10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  loginButton: {
    backgroundColor: colors.brandPrimary,
    borderRadius: 25,
    height: 50,
    width: 220,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});

export default styles;
