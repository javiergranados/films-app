import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { appStyles } from '../themes/appTheme';

const FilmsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={appStyles.title}>Films screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FilmsScreen;
