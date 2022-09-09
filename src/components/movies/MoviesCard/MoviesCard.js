import './MoviesCard.css';

import CardButton from '../CardButton/CardButton';
import React from 'react';

function MoviesCard({ name, duration, thumbnail }) {
  // TESTING BUTTON CLICK
  const [isSaved, setIsSaved] = React.useState(false);

  function handleClick() {
    setIsSaved((state) => !state);
  }

  return (
    <li className="movie-card">
      <h3 className="movie-card__name">{name}</h3>
      <p className="movie-card__duration">{duration} минут</p>
      <img
        src={thumbnail}
        alt={`Кадр из фильма ${name}`}
        className="movie-card__thumbnail"
      />

      {isSaved ? (
        <CardButton
          className="movie-card__button"
          type="done"
          onClick={handleClick}
        />
      ) : (
        <CardButton
          className="movie-card__button"
          type="save"
          onClick={handleClick}
        />
      )}
    </li>
  );
}

export default MoviesCard;
