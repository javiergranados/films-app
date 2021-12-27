import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';
import MoviePoster from './MoviePoster';
import { Movie, MovieListProps } from '../interfaces/movieInterface';
import { getImageColors, getUri } from '../utils';

const { width: windowWith } = Dimensions.get('window');

interface CarouselProps {
  movies: Movie[];
}

const Carousel = ({ movies }: CarouselProps) => {
  const getPosterColors = async (index: number) => {
    const selectedMovie = movies[index];
    const uri = getUri(selectedMovie.poster_path);

    const [primary, secondary] = await getImageColors(uri);
    console.log({ primary, secondary });
  };

  return (
    <View style={styles.carouselContainer}>
      <SnapCarousel
        data={movies}
        renderItem={({ item }: MovieListProps) => <MoviePoster movie={item} />}
        sliderWidth={windowWith}
        itemWidth={300}
        inactiveSlideOpacity={0.9}
        onSnapToItem={getPosterColors}
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
