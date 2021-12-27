import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { RootStackParamList } from '../navigators/StackNavigator';
import { useMovieDetails } from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: screenHeight } = Dimensions.get('screen');

interface DetailScreenProps extends StackScreenProps<RootStackParamList, 'DetailScreen'> {}

const DetailScreen = ({ route, navigation }: DetailScreenProps) => {
  const movie = route.params;
  const uri = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

  const { movieDetails, cast, isLoading } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{
              uri,
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.originalTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} />
      ) : (
        <MovieDetails info={movieDetails!} cast={cast} />
      )}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.pop()}>
        <Icon name="arrow-back-outline" size={60} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },
  image: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  originalTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    elevation: 10,
    top: 25,
    left: 5,
  },
});

export default DetailScreen;
