import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieDetails as MovieDetailsInterface } from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';

interface MovieDetailsProps {
  info: MovieDetailsInterface;
  cast: Cast[];
}
const MovieDetails = ({ info, cast }: MovieDetailsProps) => {
  const details = (
    <View style={styles.detailsContainer}>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="star-outline" size={16} color="grey" />
        <Text> {info.vote_average}</Text>
        <Text style={{ marginLeft: 5 }}> - {info.genres.map((genre) => genre.name).join(',')}</Text>
      </View>
      <Text style={styles.infoTitle}>Overview</Text>
      <Text style={styles.infoText}>{info.overview}</Text>
      <Text style={styles.infoTitle}>Budget</Text>
      <Text style={styles.budget}>{currencyFormatter.format(info.budget, { code: 'EU' })}€</Text>
    </View>
  );

  const castList = (
    <View style={styles.castContainer}>
      <Text style={styles.castTitle}>Cast</Text>
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CastItem actor={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10, height: 70 }}
      />
    </View>
  );

  return (
    <>
      {details}
      {castList}
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    marginHorizontal: 20,
  },
  infoTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
  },
  budget: {
    fontSize: 18,
  },
  castContainer: {
    marginTop: 10,
    marginBottom: 100,
  },
  castTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});

export default MovieDetails;
