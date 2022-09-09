import './MoviesCard.css';

import photo from '../../../images/student-photo.jpg';
import CardButton from '../CardButton/CardButton';

function MoviesCard() {
  return (
    <li className="movie-card">
      <h3 className="movie-card__name">В погоне за Бэнкси</h3>
      <p className="movie-card__duration">27 минут</p>
      <img src={photo} alt="" className="movie-card__thumbnail" />
      <CardButton className="movie-card__button" type="delete" />
    </li>
  );
}

export default MoviesCard;
