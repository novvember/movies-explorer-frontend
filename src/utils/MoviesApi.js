import { MOVIE_API } from './config';

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  async getMovies() {
    const url = `${this._baseUrl}/beatfilm-movies`;
    const res = await fetch(url);

    if (!res.ok) return new Error(res.status);

    const data = await res.json();
    return data;
  }
}

const moviesApi = new MoviesApi({ baseUrl: MOVIE_API.BASE_URL });

export default moviesApi;
