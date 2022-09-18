/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

class Api {
  constructor(config) {
    this.url = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  getUserInfo() {
    return fetch(`${this.url}/${'users'}/${'me'}`, {
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  }

  registerUser(name, password, email) {
    return fetch(`${this.url}/${'signup'}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    }).then(this._checkResponse);
  }

  loginUser(email, password) {
    return fetch(`${this.url}/${'signin'}`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  logOut() {
    return fetch(`${this.url}/${'signout'}`, {
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  }

  /* getInitialsCards */
  getMovies() {
    return fetch(`${this.url}/${'movies'}`, {
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  }

  editProfile(name, email) {
    return fetch(`${this.url}/${'users'}/${'me'}`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  createMovie(value) {
    return fetch(`${this.url}/${'movies'}`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: value.country ? value.country : 'Неизвестно',
        director: value.director,
        duration: value.duration,
        year: value.year,
        description: value.year,
        image: `${'https://api.nomoreparties.co'}${value.image.url}`,
        trailerLink: !value.trailerLink.includes('https') ? `${'https://www.youtuve.com'}` : value.trailerLink,
        thumbnail: `${'https://api.nomoreparties.co'}${value.image.formats.thumbnail.url}`,
        movieId: value.id,
        nameRU: value.nameRU,
        nameEN: value.nameEN,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this.url}/${'movies'}/${id}`, {
      method: 'DELETE',

      credentials: 'include',
    }).then(this._checkResponse);
  }
} // end of Api

const options = {
  baseUrl: 'https://your-movie-explorer.nomoredomains.work',
  /* baseUrl: 'http://localhost:3002', */
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = new Api(options);
