import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBNowPlaying } from '../interfaces/movieInterface';

const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [moviesReleased, setMoviesReleased] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setMoviesReleased(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { isLoading, moviesReleased };
};

export { useMovies };
