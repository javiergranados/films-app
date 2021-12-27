import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

const RootStack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="HomeScreen" options={{ title: 'Home' }} component={HomeScreen} />
      <RootStack.Screen name="DetailScreen" options={{ title: 'Detail' }} component={DetailScreen} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
