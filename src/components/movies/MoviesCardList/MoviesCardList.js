import React from 'react';
import './MoviesCardList.css';
import More from '../More/More';
import { CARDS_RENDER_COUNT } from '../../../utils/config';
import countGridColumns from '../../../utils/countGridColumns';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ type, movies }) {
  const [renderedMovies, setRenderedMovies] = React.useState([]);
  const grid = React.useRef();

  React.useEffect(() => {
    if (movies.length) {
      const columnsCount = countGridColumns(grid.current);
      const initialCardsCount =
        CARDS_RENDER_COUNT[columnsCount]?.INITIAL ??
        CARDS_RENDER_COUNT['default'].INITIAL;
      const array = movies.slice(0, initialCardsCount);
      setRenderedMovies(array);
    }
  }, [movies]);

  function handleMoreClick() {
    const columnsCount = countGridColumns(grid.current);
    const renderedCountFixed =
      Math.ceil(renderedMovies.length / columnsCount) * columnsCount;
    const moreCardsCount =
      CARDS_RENDER_COUNT[columnsCount]?.ADD ??
      CARDS_RENDER_COUNT['default'].ADD;
    const array = movies.slice(0, renderedCountFixed + moreCardsCount);
    setRenderedMovies(array);
  }

  return (
    <>
      <ul
        className="movie-card-list section"
        aria-label="Список фильмов"
        ref={grid}
      >
        {renderedMovies.map((movie) => {
          return <MoviesCard movieData={movie} type={type} key={movie.id} />;
        })}
      </ul>
      {renderedMovies.length < movies.length && (
        <More onClick={handleMoreClick} />
      )}
    </>
  );
}

export default MoviesCardList;
