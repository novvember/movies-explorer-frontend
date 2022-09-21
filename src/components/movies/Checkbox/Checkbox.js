import classNames from 'classnames';
import './Checkbox.css';

function Checkbox({ className, title, name, checked, onChange, disabled }) {
  return (
    <label className={classNames(className, 'checkbox')}>
      <input
        type="checkbox"
        className="checkbox__system-checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="checkbox__custom-checkbox"></span>
      <span className="checkbox__label">{title}</span>
    </label>
  );
}

export default Checkbox;
