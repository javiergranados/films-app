import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Movie, MovieListProps } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface HorizontalSliderProps {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({ title, movies }: HorizontalSliderProps) => {
  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}
    >
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }: MovieListProps) => <MoviePoster movie={item} width={140} height={200} />}
        keyExtractor={(item: Movie) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default HorizontalSlider;
