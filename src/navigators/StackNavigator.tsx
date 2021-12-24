import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <RootStack.Screen name="HomeScreen" options={{ title: 'Home' }} component={HomeScreen} />
      <RootStack.Screen name="DetailScreen" options={{ title: 'Detail' }} component={DetailScreen} />
    </RootStack.Navigator>
  );
};

export default StackNavigator;
