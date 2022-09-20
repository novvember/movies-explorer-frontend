import { MOVIE_API } from './config';

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  async getMovies() {
    const url = `${this._baseUrl}/beatfilm-movies`;
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      return new Error(data.message);
    }

    return data;
  }
}

const moviesApi = new MoviesApi({ baseUrl: MOVIE_API.BASE_URL });

export default moviesApi;
