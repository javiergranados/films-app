import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';
import { appStyles } from '../themes/appTheme';

const HomeScreen = () => {
  useEffect(() => {
    movieDB.get<MovieDBNowPlaying>('/now_playing').then((res) => {
      console.log(res.data.results);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={appStyles.title}>Home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
