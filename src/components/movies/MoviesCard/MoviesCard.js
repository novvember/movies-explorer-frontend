import './MoviesCard.css';

import CardButton from '../CardButton/CardButton';
import React from 'react';
import getNumDeclination from '../../../utils/getNumDeclination';

function MoviesCard({ name, duration, thumbnail, type }) {
  // DEMO FOR BUTTON CLICK
  const [isSaved, setIsSaved] = React.useState(false);

  function handleClickSave() {
    setIsSaved((state) => !state);
  }

  const ref = React.useRef();

  function handleClickDelete() {
    setIsSaved(false);
    ref.current.remove();
  }

  return (
    <li className="movie-card" ref={ref}>
      <h3 className="movie-card__name">{name}</h3>
      <p className="movie-card__duration">{`${duration} ${getNumDeclination(
        duration,
        ['минута', 'минуты', 'минут'],
      )}`}</p>
      <img
        src={thumbnail}
        alt={`Кадр из фильма ${name}`}
        className="movie-card__thumbnail"
      />

      {type === 'all' ? (
        isSaved ? (
          <CardButton
            className="movie-card__button"
            type="done"
            onClick={handleClickSave}
          />
        ) : (
          <CardButton
            className="movie-card__button"
            type="save"
            onClick={handleClickSave}
          />
        )
      ) : (
        <CardButton
          className="movie-card__button"
          type="delete"
          onClick={handleClickDelete}
        />
      )}
    </li>
  );
}

export default MoviesCard;
