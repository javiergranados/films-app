import { GradientActions, GradientState } from './GradientTypes';

const gradientReducer = (state: GradientState, action: GradientActions): GradientState => {
  switch (action.type) {
    case 'SET_COLORS':
      return {
        ...state,
        mainColors: {
          primary: action.payload.primary,
          secondary: action.payload.secondary,
        },
        prevColors: {
          primary: state.mainColors.primary,
          secondary: state.mainColors.secondary,
        },
      };
    default:
      return state;
  }
};

export { gradientReducer };
