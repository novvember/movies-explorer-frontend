import { SEARCH_ERRORS } from '../../../utils/config';
import Message from '../Message/Message';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SearchResults({
  isErrorOnLoading,
  isLoading,
  movies,
  savedMovies,
  onCardClick,
  isSavedMoviesSearchResult = false,
}) {
  return isErrorOnLoading ? (
    <Message text={SEARCH_ERRORS.CANT_GET_MOVIES} isError />
  ) : isLoading ? (
    <Preloader />
  ) : movies.length === 0 ? (
    <Message text={SEARCH_ERRORS.NOT_FOUND} />
  ) : (
    <MoviesCardList
      movies={movies}
      savedMovies={savedMovies}
      onCardClick={onCardClick}
      isSavedMoviesCardList={isSavedMoviesSearchResult}
    />
  );
}

export default SearchResults;
