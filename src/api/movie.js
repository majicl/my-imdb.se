import config from '../../config/movie-provider';

export const getPopularMovies = async (page = 1) => {
  // eslint-disable-next-line no-undef
  const response = await fetch(
    `${config.baseUrl}/movie/popular?api_key=${config.apiKey}&page=${page}`
  );
  return response.json();
};

export const getMovie = async id => {
  // eslint-disable-next-line no-undef
  const response = await fetch(
    `${config.baseUrl}/movie/${id}?api_key=${config.apiKey}`
  );
  return response.json();
};
