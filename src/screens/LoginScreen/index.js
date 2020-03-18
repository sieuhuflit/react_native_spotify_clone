import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginScreen from './LoginScreen';
import { getToken } from '../../data/auth/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getToken }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
