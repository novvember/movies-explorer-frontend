import { MOVIE_API } from './config';

export default function formatMovies(movie) {
  return {
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    image: MOVIE_API.MEDIA_BASE_URL + movie.image.url,
    trailerLink: movie.trailerLink,
    thumbnail: MOVIE_API.MEDIA_BASE_URL + movie.image.formats.thumbnail.url,
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
  };
}
