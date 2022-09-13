import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

import testData from '../../../utils/testData';

function MoviesCardList({ type }) {
  // DEMO FOR GETTING AND SETTING MOVIE CARDS
  const [movies, setMovies] = React.useState([]);

  function testGetMovies() {
    setMovies(testData);
  }

  React.useEffect(() => {
    testGetMovies();
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
