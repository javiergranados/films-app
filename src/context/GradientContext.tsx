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

  const setMainColors = (colors: ImageColors) => dispatch({ type: 'SET_MAIN_COLORS', payload: colors });

  const setPrevColors = (colors: ImageColors) => dispatch({ type: 'SET_PREV_COLORS', payload: colors });

  return (
    <GradientContext.Provider
      value={{
        ...gradientState,
        setMainColors,
        setPrevColors,
      }}
    >
      {children}
    </GradientContext.Provider>
  );
};
