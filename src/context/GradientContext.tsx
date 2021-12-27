import React, { createContext, useReducer } from 'react';
import { GradientState, ImageColors, GradientContextProps } from './GradientTypes';
import { gradientReducer } from './GradientReducer';

const gradientInitialState: GradientState = {
  mainColors: {
    primary: 'transparent',
    secondary: 'transparent',
  },
  prevColors: {
    primary: 'transparent',
    secondary: 'transparent',
  },
};

export const GradientContext = createContext({} as GradientContextProps);

export const GradientProvider = ({ children }: any) => {
  const [gradientState, dispatch] = useReducer(gradientReducer, gradientInitialState);

  const setColors = (colors: ImageColors) => dispatch({ type: 'SET_COLORS', payload: colors });

  return (
    <GradientContext.Provider
      value={{
        ...gradientState,
        setColors,
      }}
    >
      {children}
    </GradientContext.Provider>
  );
};
