import ImageColors from 'react-native-image-colors';

export const getUri = (slug: string | null) => `https://image.tmdb.org/t/p/w500${slug}`;

export const getImageColors = async (uri: string) => {
  const result = await ImageColors.getColors(uri);

  let primary: string = '';
  let secondary: string = '';
  switch (result.platform) {
    case 'android':
      primary = result.vibrant!;
      secondary = result.darkVibrant!;
      break;
    case 'ios':
      primary = result.primary;
      secondary = result.secondary;
      break;
  }

  return [primary, secondary];
};
