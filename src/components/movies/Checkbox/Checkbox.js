import classNames from 'classnames';
import './Checkbox.css';

function Checkbox({ className, title }) {
  return (
    <label className={classNames(className, 'checkbox')}>
      <input
        type="checkbox"
        className="checkbox__system-checkbox"
        defaultChecked={true}
      />
      <span className="checkbox__custom-checkbox"></span>
      <span className="checkbox__label">{title}</span>
    </label>
  );
}

export default Checkbox;
