import classNames from 'classnames';
import './SubmitButton.css';

function SubmitButton({ onClick, title, className, isDisabled, isLoading }) {
  return (
    <button
      className={classNames('submit-button', className, {
        'submit-button_type_loading': isLoading,
      })}
      onClick={onClick}
      type="submit"
      disabled={isDisabled}
    >
      {title}
    </button>
  );
}

export default SubmitButton;
