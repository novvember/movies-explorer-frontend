import './MoviesCard.css';

import CardButton from '../CardButton/CardButton';

function MoviesCard({ name, duration, thumbnail }) {
  return (
    <li className="movie-card">
      <h3 className="movie-card__name">{name}</h3>
      <p className="movie-card__duration">{duration} минут</p>
      <img
        src={thumbnail}
        alt={`Кадр из фильма ${name}`}
        className="movie-card__thumbnail"
      />
      <CardButton className="movie-card__button" type="delete" />
    </li>
  );
}

export default MoviesCard;
