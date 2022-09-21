import './MoviesCard.css';

import React from 'react';
import GeneralCardButton from '../GeneralCardButton/GeneralCardButton';
import SavedCardButton from '../SavedCardButton/SavedCardButton';
import formatMovieDuration from '../../../utils/formatMovieDuration';

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
      <p className="movie-card__duration">
        {formatMovieDuration(movie.duration)}
      </p>
      <a
        href={movie.trailerLink}
        className="movie-card__link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={movie.image}
          alt={`Кадр из фильма ${movie.nameRU}`}
          className="movie-card__thumbnail"
        />
      </a>

      {isSavedMovieCard ? (
        <SavedCardButton onClick={handleClick} disabled={isLoading} />
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
