import { SEARCH_TEXTS } from '../../../utils/config';
import './More.css';

function More({ onClick }) {
  return (
    <div className="more section">
      <button className="more__button" type="button" onClick={onClick}>
        {SEARCH_TEXTS.MORE_BUTTON}
      </button>
    </div>
  );
}

export default More;
