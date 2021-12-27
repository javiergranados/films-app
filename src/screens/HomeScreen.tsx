import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useMovies } from '../hooks/useMovies';
import Carousel from '../components/Carousel';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <Carousel movies={nowPlaying} />
          <HorizontalSlider title="Billboard" movies={nowPlaying} />
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Coming soon" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
