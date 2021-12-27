import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieDetails as MovieDetailsInterface } from '../interfaces/movieInterface';
import currencyFormatter from 'currency-formatter';

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
      <Text style={styles.infoTitle}>Historia</Text>
      <Text style={styles.infoText}>{info.overview}</Text>
      <Text style={styles.infoTitle}>Budget</Text>
      <Text style={styles.budget}>{currencyFormatter.format(info.budget, { code: 'EU' })}€</Text>
    </View>
  );

  return <>{details}</>;
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
});

export default MovieDetails;
