import classNames from 'classnames';

function AuthInput({ label, error, isDisabled, ...other }) {
  return (
    <label className="auth__input-container">
      <span className="auth__label">{label}</span>
      <input
        className={classNames('auth__input', { auth__input_type_error: error })}
        disabled={isDisabled}
        {...other}
      />
      <span className="auth__input-error">{error}</span>
    </label>
  );
}

export default AuthInput;
