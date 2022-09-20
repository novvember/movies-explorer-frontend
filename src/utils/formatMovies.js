import isURL from 'validator/lib/isURL';
import { MOVIE_API } from './config';

export default function formatMovies(movie) {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: MOVIE_API.MEDIA_BASE_URL + movie.image.url,
    trailerLink: isURL(movie.trailerLink)
      ? movie.trailerLink
      : MOVIE_API.MEDIA_BASE_URL + movie.image.url,
    thumbnail: MOVIE_API.MEDIA_BASE_URL + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
}
