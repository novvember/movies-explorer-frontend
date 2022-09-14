import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import More from '../More/More';
import { CARDS_RENDER_COUNT } from '../../../utils/config';
import countGridColumns from '../../../utils/countGridColumns';

function MoviesCardList({ type, movies }) {
  const [renderedMovies, setRenderedMovies] = React.useState([]);
  const grid = React.useRef();

  React.useEffect(() => {
    const columnsCount = countGridColumns(grid.current);
    const initialCardsCount =
      CARDS_RENDER_COUNT[columnsCount]?.initial ??
      CARDS_RENDER_COUNT['default'].initial;
    const array = movies.slice(0, initialCardsCount);
    setRenderedMovies(array);
  }, [movies]);

  function handleMoreClick() {
    const columnsCount = countGridColumns(grid.current);
    const renderedCountFixed =
      Math.ceil(renderedMovies.length / columnsCount) * columnsCount;
    const moreCardsCount =
      CARDS_RENDER_COUNT[columnsCount]?.add ??
      CARDS_RENDER_COUNT['default'].add;
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
          return (
            <MoviesCard
              key={movie.id}
              name={movie.nameRU}
              duration={movie.duration}
              thumbnail={'https://api.nomoreparties.co/' + movie.image.url}
              type={type}
            />
          );
        })}
      </ul>
      {renderedMovies.length < movies.length && (
        <More onClick={handleMoreClick} />
      )}
    </>
  );
}

export default MoviesCardList;
