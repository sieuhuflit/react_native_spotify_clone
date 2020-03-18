import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Video from 'react-native-video';
import { StyleSheet, Image, Text, View } from 'react-native';
import { globalStyles } from '../../constants';
import RoomiesVideo from '../../assets/roomies.mp4';
import TouchText from '../../components/TouchText';
import styles from './styles';

export default class LoginScreen extends Component {
  static propTypes = {
    getToken: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  onPressLogin = () => {
    const { getToken, navigation } = this.props;
    getToken(() => {
      navigation.navigate('TabNavigation');
    });
  };

  render() {
    return (
      <View style={globalStyles.flex1}>
        <Video
          repeat
          source={RoomiesVideo}
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
          shouldPlay
          isLooping
        />

        <View style={styles.logoWrapper}>
          <Image source={require('../../assets/logo.png')} style={styles.logo} />
          <Text style={styles.logoText}>Spotify</Text>
        </View>
        <View style={styles.loginButtonWrapper}>
          <TouchText
            onPress={this.onPressLogin}
            style={styles.loginButton}
            styleText={styles.loginButtonText}
            text="Login"
          />
        </View>
      </View>
    );
  }
}
