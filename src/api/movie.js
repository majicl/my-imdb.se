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

export const getSimilarMovies = async id => {
  // eslint-disable-next-line no-undef
  const response = await fetch(
    `${config.baseUrl}/movie/${id}/recommendations?api_key=${config.apiKey}`
  );
  return response.json();
};

export const getHighestRatedMovies = async () => {
  // eslint-disable-next-line no-undef
  const response = await fetch(
    `${config.baseUrl}/discover/movie/?api_key=${config.apiKey}&sort_by=vote_average.desc`
  );
  return response.json();
};

export const searchMovies = async query => {
  // eslint-disable-next-line no-undef
  const response = await fetch(
    `${config.baseUrl}/search/movie?api_key=${config.apiKey}&query=${query}`
  );
  return response.json();
};
