import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';
import MoviePoster from './MoviePoster';
import { Movie, MovieListProps } from '../interfaces/movieInterface';

const { width: windowWith } = Dimensions.get('window');

interface CarouselProps {
  movies: Movie[];
}

const Carousel = ({ movies }: CarouselProps) => {
  return (
    <View style={styles.carouselContainer}>
      <SnapCarousel
        data={movies}
        renderItem={({ item }: MovieListProps) => <MoviePoster movie={item} />}
        sliderWidth={windowWith}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    height: 440,
  },
});

export default Carousel;
