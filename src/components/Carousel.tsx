import React, { useContext, useEffect } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';
import MoviePoster from './MoviePoster';
import { Movie, MovieListProps } from '../interfaces/movieInterface';
import { getImageColors, getUri } from '../utils';
import { GradientContext } from '../context/GradientContext';

const { width: windowWith } = Dimensions.get('window');

interface CarouselProps {
  movies: Movie[];
}

const Carousel = ({ movies }: CarouselProps) => {
  const { setColors } = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const selectedMovie = movies[index];
    const uri = getUri(selectedMovie.poster_path);

    const [primary, secondary] = await getImageColors(uri);
    setColors({ primary, secondary });
  };

  useEffect(() => {
    if (movies.length > 0) {
      getPosterColors(0);
    }
  }, []);

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
