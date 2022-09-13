import classNames from 'classnames';
import './SubmitButton.css';

function SubmitButton({ onClick, title, className }) {
  return (
    <button
      className={classNames('submit-button', className)}
      onClick={onClick}
      type="submit"
    >
      {title}
    </button>
  );
}

export default SubmitButton;
