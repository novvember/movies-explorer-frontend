function AuthInput({ label, params }) {
  return (
    <label className="auth__input-container">
      <span className="auth__label">{label}</span>
      <input className="auth__input" {...params} />
    </label>
  );
}

export default AuthInput;
