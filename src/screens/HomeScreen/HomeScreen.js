import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { globalStyles } from '../../constants';
import AlbumsHorizontal from '../../components/AlbumsHorizontal';

class HomeScreen extends React.Component {
  static propTypes = {
    fetchRecommendation: PropTypes.func.isRequired,
    listAlbums: PropTypes.array
  };

  static defaultProps = {
    listAlbums: []
  };

  async componentDidMount() {
    const { fetchRecommendation } = this.props;
    fetchRecommendation();
  }

  render() {
    const { listAlbums } = this.props;
    return (
      <React.Fragment>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={globalStyles.container}
        >
          <View style={globalStyles.spacer8} />
          <AlbumsHorizontal
            data={listAlbums}
            heading="Best album in US"
            tagline="The music most voted this month."
          />
        </ScrollView>
      </React.Fragment>
    );
  }
}

export default HomeScreen;
