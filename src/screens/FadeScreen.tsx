import React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = useFade();

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.content, opacity }} />
      <Button title="Fade in" onPress={fadeIn} />
      <Button title="Fade out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 150,
    height: 150,
    backgroundColor: '#084F6A',
    borderColor: 'white',
    borderWidth: 10,
    marginBottom: 10,
  },
});

export default FadeScreen;
