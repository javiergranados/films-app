import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';
import { getUri } from '../utils';

interface CastItemProps {
  actor: Cast;
}
const CastItem = ({ actor }: CastItemProps) => {
  const uri = getUri(actor.profile_path);

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      )}
      <View style={styles.actorContainer}>
        <Text style={styles.name}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginLeft: 20,
    paddingRight: 15,
  },
  actorContainer: {
    marginLeft: 10,
    marginTop: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: {
    fontSize: 16,
    opacity: 0.7,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});

export default CastItem;
