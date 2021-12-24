import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, View, StyleSheet, Button } from 'react-native';
import { appStyles } from '../themes/appTheme';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigators/StackNavigator';

type HomeScreenProps = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProps>();

  return (
    <View style={styles.container}>
      <Text style={appStyles.title}>Home screen</Text>
      <Button title="Go to detail" onPress={() => navigation.navigate('DetailScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
