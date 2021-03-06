import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigators/StackNavigator';
import { getUri } from '../utils';

type MoviePosterNavigationrops = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface MoviePosterProps {
  movie: Movie;
  width?: number;
  height?: number;
}

const MoviePoster = ({ movie, width = 300, height = 420 }: MoviePosterProps) => {
  const navigation = useNavigation<MoviePosterNavigationrops>();
  const uri = getUri(movie.poster_path);

  return (
    <TouchableOpacity
      style={{ ...styles.container, width, height }}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailScreen', movie)}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    paddingBottom: 20,
    paddingHorizontal: 7,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});

export default MoviePoster;
