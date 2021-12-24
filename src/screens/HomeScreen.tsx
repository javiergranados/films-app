import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MoviePoster from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { Movie } from '../interfaces/movieInterface';

const { width: windowWith } = Dimensions.get('window');

interface CarouselProps {
  item: Movie;
  index: number;
}

const HomeScreen = () => {
  const { moviesReleased, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }
  return (
    <View style={{ marginTop: top + 20 }}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={moviesReleased}
          renderItem={({ item }: CarouselProps) => <MoviePoster movie={item} />}
          sliderWidth={windowWith}
          itemWidth={300}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    height: 440,
  },
});

export default HomeScreen;
