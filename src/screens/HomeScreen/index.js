import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeScreen from './HomeScreen';
import { fetchRecommendation } from '../../data/home/actions';
import HomeSelectors from '../../data/home/selectors';

const mapStateToProps = state => ({
  listAlbums: HomeSelectors.getListAlbums(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchRecommendation }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
