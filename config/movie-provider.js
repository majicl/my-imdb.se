export default {
  baseUrl: process.env.MOVIE_BASE_URL || 'http://api.themoviedb.org/3',
  apiKey: process.env.MOVIE_API_KEY || '745abd285d63078615a35b1a48547e51',
  imagesBaseUrl: process.env.IMAGES_BASE_URL || 'https://image.tmdb.org/t/p'
};
