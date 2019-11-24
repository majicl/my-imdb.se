import React from 'react';
import { connect } from 'react-redux';
import './movie-details.scss';
import { getMovie } from '../../api/movie';
import Header from '../Header/Header';
import config from '../../../config/movie-provider';
import Splitter from '../shared/Splitter/Splitter';
import SimilarMovies from './SimilarMovies/similar-movies.js';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {}
    };
  }

  async componentDidMount() {
    await this.updateMovies();
  }

  async componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      await this.updateMovies();
    }
  }
  async updateMovies() {
    const movie = await getMovie(this.props.match.params.id);
    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;
    return (
      <React.Fragment>
        <Header />
        <section className="container">
          <header className="movie-title">
            <h1>{movie.title}</h1>
          </header>
          <section className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              {movie.poster_path && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={movie.homepage}
                >
                  <img
                    src={`${config.imagesBaseUrl}/w400${movie.poster_path}`}
                    alt={movie.title}
                  />
                </a>
              )}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 movie-details">
              {movie.vote_average && (
                <div className="rating" title="vote average">
                  {movie.vote_average}
                </div>
              )}
              {movie.vote_count && (
                <div className="voter" title="vote count">
                  <span role="img" aria-labelledby="">
                    🙍‍♂️
                  </span>
                  {movie.vote_count}
                </div>
              )}
              {movie.tagline && (
                <div>
                  <h3>Tagline:</h3>
                  <p>{movie.tagline}</p>
                </div>
              )}

              {movie.genres && (
                <div>
                  <h3>Genres:</h3>
                  <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
                </div>
              )}

              {movie.production_countries && (
                <div>
                  <h3>Countries:</h3>
                  <p>
                    {movie.production_countries
                      .map(country => country.name)
                      .join(', ')}
                  </p>
                </div>
              )}

              {movie.runtime && (
                <div>
                  <h3>Duration:</h3>
                  <p>
                    <span>{movie.runtime}</span>
                    <span> mintues</span>
                  </p>
                </div>
              )}

              {movie.release_date && (
                <div>
                  <h3>Release Date:</h3>
                  <p>
                    {new Date(movie.release_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              )}
              {movie.spoken_languages && (
                <div>
                  <h3>Spoken Language(s):</h3>
                  <p>
                    {movie.spoken_languages
                      .map(spoken_language => spoken_language.name)
                      .join(', ')}
                  </p>
                </div>
              )}
              {movie.imdb_id && (
                <div>
                  <a
                    href={`https://www.imdb.com/title/${movie.imdb_id}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="imdb-img"
                      src="https://image.flaticon.com/icons/png/512/889/889199.png"
                      alt={movie.title}
                    />
                  </a>
                </div>
              )}
            </div>
          </section>
          {movie.overview && (
            <section className="row">
              <div className="movie-details">
                <div>
                  <h3>Overview:</h3>
                </div>
                <div>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </section>
          )}
        </section>
        <Splitter />
        <SimilarMovies movieId={this.props.match.params.id} />
      </React.Fragment>
    );
  }
}

const mapStatetoProps = () => {
  return {};
};
export default connect(mapStatetoProps)(MovieDetails);
