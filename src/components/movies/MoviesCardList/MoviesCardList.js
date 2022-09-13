import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import moviesApi from '../../../utils/MoviesApi';

function MoviesCardList({ type }) {
  const [movies, setMovies] = React.useState([]);

  async function getMovies() {
    const movies = await moviesApi.getMovies();
    setMovies(movies);
  }

  React.useEffect(() => {
    getMovies();
  }, []);

  return (
    <ul className="movie-card-list section" aria-label="Список фильмов">
      {movies.map((movie) => {
        return (
          <MoviesCard
            key={movie.id}
            name={movie.nameRU}
            duration={movie.duration}
            thumbnail={
              'https://api.nomoreparties.co/' +
              movie.image.formats.thumbnail.url
            }
            type={type}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;
