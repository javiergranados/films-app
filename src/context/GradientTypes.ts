export interface ImageColors {
  primary: string;
  secondary: string;
}

export interface GradientState {
  mainColors: ImageColors;
  prevColors: ImageColors;
}

export interface GradientContextProps extends GradientState {
  setMainColors: (colors: ImageColors) => void;
  setPrevColors: (colors: ImageColors) => void;
}

export type GradientActions =
  | { type: 'SET_MAIN_COLORS'; payload: ImageColors }
  | { type: 'SET_PREV_COLORS'; payload: ImageColors };
