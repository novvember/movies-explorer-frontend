import classNames from 'classnames';
import './CardButton.css';

function CardButton({ className, alt, text, onClick, disabled }) {
  return (
    <button
      className={classNames('card-button', className, 'movie-card__button')}
      type="button"
      aria-label={alt}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default CardButton;
