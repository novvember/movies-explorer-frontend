import classNames from 'classnames';
import './Checkbox.css';

function Checkbox({ className, title }) {
  return (
    <label className={classNames(className, 'checkbox')}>
      <input
        type="checkbox"
        class="checkbox__system-checkbox"
        defaultChecked={true}
      />
      <span class="checkbox__custom-checkbox"></span>
      <span class="checkbox__label">{title}</span>
    </label>
  );
}

export default Checkbox;
