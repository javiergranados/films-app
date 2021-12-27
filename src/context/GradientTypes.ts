export interface ImageColors {
  primary: string;
  secondary: string;
}

export interface GradientState {
  mainColors: ImageColors;
  prevColors: ImageColors;
}

export interface GradientContextProps extends GradientState {
  setColors: (colors: ImageColors) => void;
}

export type GradientActions = { type: 'SET_COLORS'; payload: ImageColors };
