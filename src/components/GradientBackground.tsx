import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}

const GradientBackground = ({ children }: GradientBackgroundProps) => {
  const { mainColors, prevColors, setPrevColors } = useContext(GradientContext);
  const { opacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevColors(mainColors);
      fadeOut(0);
    });
  }, [mainColors]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.8 }}
      />
      <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
        <LinearGradient
          colors={[mainColors.primary, mainColors.secondary, 'white']}
          style={{ ...StyleSheet.absoluteFillObject }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.8 }}
        />
      </Animated.View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientBackground;
