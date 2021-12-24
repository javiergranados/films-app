import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'b88781fa4b6bc893e035dac0ca39d75c',
    language: 'es-ES',
  },
});

export default movieDB;
