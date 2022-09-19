import CardButton from '../CardButton/CardButton';

function SavedCardButton({ onClick, disabled }) {
  const className = 'card-button_type_delete';
  const text = '';
  const alt = 'Удалить фильм из сохраненных';

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
