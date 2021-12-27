import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#084F6A', '#75cedb', 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientBackground;
