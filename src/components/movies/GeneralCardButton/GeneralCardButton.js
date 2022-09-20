import CardButton from '../CardButton/CardButton';
import { CARD_TEXTS } from '../../../utils/config';

function GeneralCardButton({ isSaved, onClick, disabled }) {
  const className = isSaved ? 'card-button_type_done' : 'card-button_type_save';
  const text = isSaved ? '' : CARD_TEXTS.SAVE_BUTTON_TEXT;
  const alt = isSaved ? CARD_TEXTS.DELETE_BUTTON_ALT : '';

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

export default GeneralCardButton;
