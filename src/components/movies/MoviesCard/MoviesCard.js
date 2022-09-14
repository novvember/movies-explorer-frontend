import './MoviesCard.css';

import React from 'react';
import getNumDeclination from '../../../utils/getNumDeclination';
import { MOVIE_API } from '../../../utils/config';
import GeneralCardButton from '../GeneralCardButton/GeneralCardButton';

function MoviesCard({ movieData, isSaved, onClick }) {
  function handleClick() {
    onClick(movieData.id);
  }

  return (
    <li className="movie-card">
      <h3 className="movie-card__name">{movieData.nameRU}</h3>
      <p className="movie-card__duration">{`${
        movieData.duration
      } ${getNumDeclination(movieData.duration, [
        'минута',
        'минуты',
        'минут',
      ])}`}</p>
      <img
        src={MOVIE_API.MEDIA_BASE_URL + movieData.image.url}
        alt={`Кадр из фильма ${movieData.name}`}
        className="movie-card__thumbnail"
      />
      <GeneralCardButton isSaved={isSaved} onClick={handleClick} />
    </li>
  );
}

export default MoviesCard;
