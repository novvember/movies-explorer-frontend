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

const moviesApi = new MoviesApi({ baseUrl: 'https://api.nomoreparties.co' });

export default moviesApi;
