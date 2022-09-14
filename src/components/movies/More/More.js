import './More.css';

function More({ onClick }) {
  return (
    <div className="more section">
      <button className="more__button" type="button" onClick={onClick}>
        Ещё
      </button>
    </div>
  );
}

export default More;
