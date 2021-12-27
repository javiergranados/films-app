import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
// import FadeScreen from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
};

export default App;
