import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blackBg,
    flex: 1
  }
});
const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text> SearchScreen </Text>
    </View>
  );
};

export default SearchScreen;
