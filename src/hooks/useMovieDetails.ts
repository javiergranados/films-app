import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieDetails } from '../interfaces/movieInterface';

interface MovieDetailsState {
  movieDetails?: MovieDetails;
  cast: Cast[];
}

const useMovieDetails = (movieId: number) => {
  const [movieDetailsState, setMovieDetailsState] = useState<MovieDetailsState>({
    movieDetails: undefined,
    cast: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieDetails>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
    const response = await Promise.all([movieDetailsPromise, castPromise]);

    setMovieDetailsState({
      movieDetails: response[0].data,
      cast: response[1].data.cast,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return { ...movieDetailsState, isLoading };
};

export { useMovieDetails };
