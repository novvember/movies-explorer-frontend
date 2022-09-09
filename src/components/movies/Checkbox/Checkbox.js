import classNames from 'classnames';
import './Checkbox.css';

function Checkbox({ className }) {
  return (
    <input type="checkbox" className={classNames(className, 'checkbox')} />
  );
}

export default Checkbox;
