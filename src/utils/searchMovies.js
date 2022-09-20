import { SEARCH_PARAMS } from './config';

function searchMovies(movies, searchText, areShortiesSeleted) {
  if (!movies.length) return movies;
  searchText = searchText.toLowerCase();

  let foundMovies = movies;

  if (!areShortiesSeleted) {
    foundMovies = foundMovies.filter(
      (movie) => movie.duration > SEARCH_PARAMS.SHORTIES_MAX_DURATION,
    );
  }

  foundMovies = foundMovies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(searchText) ||
      movie.nameEN.toLowerCase().includes(searchText) ||
      movie.description.toLowerCase().includes(searchText) ||
      movie.country.toLowerCase().includes(searchText) ||
      movie.director.toLowerCase().includes(searchText) ||
      movie.year.toLowerCase().includes(searchText) ||
      movie.duration.toString().includes(searchText),
  );

  return foundMovies;
}

export default searchMovies;
