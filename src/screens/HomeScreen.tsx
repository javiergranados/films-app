import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { appStyles } from '../themes/appTheme';

const HomeScreen = () => {
  const { moviesReleased, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={appStyles.title}>{moviesReleased[0].title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
