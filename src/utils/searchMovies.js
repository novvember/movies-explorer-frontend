import { SEARCH_PARAMS } from './config';

function searchMovies(movies, searchText, areShortiesSeleted) {
  if (!movies.length) return movies;

  let foundMovies = movies;

  if (!areShortiesSeleted) {
    foundMovies = foundMovies.filter(
      (movie) => movie.duration > SEARCH_PARAMS.SHORTIES_MAX_DURATION,
    );
  }

  const regexp = new RegExp(searchText, 'i');
  foundMovies = foundMovies.filter((movie) => regexp.test(movie.nameRU));

  return foundMovies;
}

export default searchMovies;
