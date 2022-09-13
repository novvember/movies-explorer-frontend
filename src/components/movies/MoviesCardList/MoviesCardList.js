import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ type, movies }) {
  return (
    <ul className="movie-card-list section" aria-label="Список фильмов">
      {movies.map((movie) => {
        return (
          <MoviesCard
            key={movie.id}
            name={movie.nameRU}
            duration={movie.duration}
            thumbnail={'https://api.nomoreparties.co/' + movie.image.url}
            type={type}
          />
        );
      })}
    </ul>
  );
}

export default MoviesCardList;
