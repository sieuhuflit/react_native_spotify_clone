import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AlbumScreen from './AlbumScreen';
import { fetchAlbum, resetAlbumDetail } from '../../data/home/actions';
import HomeSelectors from '../../data/home/selectors';

const mapStateToProps = state => ({
  albumDetail: HomeSelectors.getAlbumDetail(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchAlbum, resetAlbumDetail }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AlbumScreen);
