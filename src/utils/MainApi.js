import { MAIN_API } from './config';

class MainApi {
  constructor({ baseUrl, authHeaders }) {
    this._baseUrl = baseUrl;
    this._authHeaders = authHeaders;
  }

  async register({ email, password, name }) {
    const url = `${this._baseUrl}/signup`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    return data;
  }

  async login({ email, password }) {
    const url = `${this._baseUrl}/signin`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    return data;
  }

  setToken(token) {
    this._authHeaders.Authorization = `Bearer ${token}`;
  }

  async checkToken(token) {
    const url = `${this._baseUrl}/users/me`;
    const headers = { ...this._authHeaders, Authorization: `Bearer ${token}` };

    const res = await fetch(url, {
      headers,
    });

    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    return data;
  }

  async getUserInfo() {
    const url = `${this._baseUrl}/users/me`;

    const res = await fetch(url, {
      headers: this._authHeaders,
    });

    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    return data;
  }

  async updateUserInfo({ name, email }) {
    const url = `${this._baseUrl}/users/me`;

    const res = await fetch(url, {
      method: 'PATCH',
      headers: this._authHeaders,
      body: JSON.stringify({ name, email }),
    });

    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    return data;
  }

  async getSavedMovies() {
    const url = `${this._baseUrl}/movies`;

    const res = await fetch(url, {
      headers: this._authHeaders,
    });

    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    return data;
  }

  async saveMovie(movieData) {
    const url = `${this._baseUrl}/movies`;

    const res = await fetch(url, {
      method: 'POST',
      headers: this._authHeaders,
      body: JSON.stringify(movieData),
    });

    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    return data;
  }

  async deleteMovie(id) {
    const url = `${this._baseUrl}/movies/${id}`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: this._authHeaders,
    });

    if (!res.ok) throw new Error(res.status);

    const data = await res.json();
    return data;
  }
}

const mainApi = new MainApi({
  baseUrl: MAIN_API.BASE_URL,
  authHeaders: MAIN_API.AUTH_HEADERS,
});

export default mainApi;
