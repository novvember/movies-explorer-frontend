import classNames from 'classnames';
import './CardButton.css';

function CardButton({ className, alt, text, onClick }) {
  return (
    <button
      className={classNames('card-button', className, 'movie-card__button')}
      type="button"
      aria-label={alt}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default CardButton;
