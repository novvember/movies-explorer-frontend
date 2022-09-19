import './MoviesCard.css';

import React from 'react';
import getNumDeclination from '../../../utils/getNumDeclination';
import GeneralCardButton from '../GeneralCardButton/GeneralCardButton';
import SavedCardButton from '../SavedCardButton/SavedCardButton';

function MoviesCard({ movie, isSaved, onClick, isSavedMovieCard = false }) {
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleClick() {
    setIsLoading(true);
    await onClick(movie);
    setIsLoading(false);
  }

  return (
    <li className="movie-card">
      <h3 className="movie-card__name">{movie.nameRU}</h3>
      <p className="movie-card__duration">{`${
        movie.duration
      } ${getNumDeclination(movie.duration, [
        'минута',
        'минуты',
        'минут',
      ])}`}</p>
      <img
        src={movie.image}
        alt={`Кадр из фильма ${movie.nameRU}`}
        className="movie-card__thumbnail"
      />

      {isSavedMovieCard ? (
        <SavedCardButton onClick={handleClick} />
      ) : (
        <GeneralCardButton
          isSaved={isSaved}
          onClick={handleClick}
          disabled={isLoading}
        />
      )}
    </li>
  );
}

export default MoviesCard;
