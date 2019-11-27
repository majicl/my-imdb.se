import React from 'react';
import { connect } from 'react-redux';
import './movie-details.scss';

import { getMovie } from '../../../api/movie';
import Header from '../../Header/Header';
import config from '../../../../config/movie-provider';
import Splitter from '../../shared/Splitter/Splitter';
import SimilarMovies from '../SimilarMovies/similar-movies';
import Loading from '../../shared/Loading/loading';
import {
  toggleFavorites,
  toggleMyList
} from '../../Account/state/account-actions';
class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: false
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
    this.setState({ loading: true });
    const movie = await getMovie(this.props.match.params.id);
    this.setState({ movie, loading: false });
  }

  render() {
    const {
      movie: {
        title,
        poster_path,
        homepage,
        vote_average,
        vote_count,
        tagline,
        genres,
        production_countries,
        runtime,
        release_date,
        spoken_languages,
        imdb_id,
        id,
        overview
      },
      loading
    } = this.state;
    const { watchLater, favorites } = this.props;
    return (
      <React.Fragment>
        <Header />
        {loading && <Loading />}
        {!loading && (
          <React.Fragment>
            <section className="container">
              <header className="movie-title">
                <h1>{title}</h1>
              </header>
              <section className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  {poster_path && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={homepage}
                    >
                      <img
                        className="poster_400"
                        src={`${config.imagesBaseUrl}/w400${poster_path}`}
                        alt={title}
                      />
                    </a>
                  )}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 movie-details">
                  {vote_average && (
                    <div className="rating" title="vote average">
                      {vote_average}
                    </div>
                  )}
                  {vote_count && (
                    <div className="voter" title="vote count">
                      <span role="img" aria-labelledby="">
                        🙍‍♂️
                      </span>
                      {vote_count}
                    </div>
                  )}
                  {tagline && (
                    <div>
                      <h3>Tagline:</h3>
                      <p>{tagline}</p>
                    </div>
                  )}

                  {genres && (
                    <div>
                      <h3>Genres:</h3>
                      <p>{genres.map(_ => _.name).join(', ')}</p>
                    </div>
                  )}

                  {production_countries && (
                    <div>
                      <h3>Countries:</h3>
                      <p>{production_countries.map(_ => _.name).join(', ')}</p>
                    </div>
                  )}

                  {runtime && (
                    <div>
                      <h3>Duration:</h3>
                      <p>
                        <span>{runtime}</span>
                        <span> mintues</span>
                      </p>
                    </div>
                  )}

                  {release_date && (
                    <div>
                      <h3>Release Date:</h3>
                      <p>
                        {new Date(release_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}
                  {spoken_languages && (
                    <div>
                      <h3>Spoken Language(s):</h3>
                      <p>
                        {spoken_languages
                          .map(spoken_language => spoken_language.name)
                          .join(', ')}
                      </p>
                    </div>
                  )}
                  <div
                    onClick={() => {
                      this.props.dispatch(toggleFavorites(id));
                    }}
                    aria-labelledby=""
                    role="img"
                    className="fav"
                  >
                    {!favorites.includes(id) ? (
                      <span
                        role="img"
                        title="Add to your favorite list"
                        aria-labelledby=""
                      >
                        🤍
                      </span>
                    ) : (
                      <span
                        role="img"
                        title="remove from your favorite list"
                        aria-labelledby=""
                      >
                        ❤️
                      </span>
                    )}
                  </div>
                  <div
                    onClick={() => {
                      this.props.dispatch(toggleMyList(id));
                    }}
                    aria-labelledby=""
                    role="img"
                    className="list"
                  >
                    {!watchLater.includes(id) ? (
                      <div
                        role="img"
                        title="Add to your list"
                        aria-labelledby=""
                      >
                        +
                      </div>
                    ) : (
                      <div
                        role="img"
                        className="rm"
                        title="remove from your list"
                        aria-labelledby=""
                      >
                        -
                      </div>
                    )}
                  </div>

                  {imdb_id && (
                    <div>
                      <a
                        href={`https://www.imdb.com/title/${imdb_id}`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="imdb-img"
                          src="https://image.flaticon.com/icons/png/512/889/889199.png"
                          alt={title}
                        />
                      </a>
                    </div>
                  )}
                </div>
              </section>
              {overview && (
                <section className="row">
                  <div className="movie-details">
                    <div>
                      <h3>Overview:</h3>
                    </div>
                    <div>
                      <p>{overview}</p>
                    </div>
                  </div>
                </section>
              )}
            </section>
            <Splitter />
            <SimilarMovies movieId={id} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

const mapStatetoProps = state => {
  const { favorites, watchLater } = state.account;
  return { favorites, watchLater };
};
export default connect(mapStatetoProps)(MovieDetails);
