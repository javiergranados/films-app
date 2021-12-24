import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigators/StackNavigator';
import { appStyles } from '../themes/appTheme';

interface DetailScreenProps extends StackScreenProps<RootStackParamList, 'DetailScreen'> {}

const DetailScreen = ({ route }: DetailScreenProps) => {
  const movie = route.params;

  return (
    <View style={styles.container}>
      <Text style={appStyles.title}>Detail screen</Text>
      <Text>{JSON.stringify(movie, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DetailScreen;
