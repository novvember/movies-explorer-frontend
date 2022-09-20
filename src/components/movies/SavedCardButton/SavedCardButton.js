import { CARD_TEXTS } from '../../../utils/config';
import CardButton from '../CardButton/CardButton';

function SavedCardButton({ onClick, disabled }) {
  const className = 'card-button_type_delete';
  const text = '';
  const alt = CARD_TEXTS.DELETE_BUTTON_ALT;

  return (
    <CardButton
      className={className}
      alt={alt}
      text={text}
      onClick={onClick}
      disabled={disabled}
    />
  );
}

export default SavedCardButton;
