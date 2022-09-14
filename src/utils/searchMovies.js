import { SEARCH_PARAMS } from './config';

function searchMovies(movies, searchText, areShortiesSeleted) {
  if (!movies.length) return movies;

  let foundMovies = movies;

  if (!areShortiesSeleted) {
    foundMovies = foundMovies.filter(
      (movie) => movie.duration > SEARCH_PARAMS.SHORTIES_MAX_DURATION,
    );
  }

  foundMovies = foundMovies.filter((movie) =>
    movie.nameRU.toLowerCase().includes(searchText.toLowerCase()),
  );

  return foundMovies;
}

export default searchMovies;
