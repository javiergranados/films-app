import { GradientActions, GradientState } from './GradientTypes';

const gradientReducer = (state: GradientState, action: GradientActions): GradientState => {
  switch (action.type) {
    case 'SET_MAIN_COLORS':
      return {
        ...state,
        mainColors: {
          primary: action.payload.primary,
          secondary: action.payload.secondary,
        },
      };
    case 'SET_PREV_COLORS':
      return {
        ...state,
        prevColors: {
          primary: action.payload.primary,
          secondary: action.payload.secondary,
        },
      };
    default:
      return state;
  }
};

export { gradientReducer };
