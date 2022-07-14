/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

/* Запросы к API */

/*
  - Карточка фильма.
  - Лайк карточки. сохраняет на наш сервер карточку.
  - Дизлайк карточкию. Удаляет ее из "Сохраненных", т.е. удаляем ее с сервера.

  - Регистрация пользователя
  - Авторизация пользователя
  - Редакитрование пользователя


*/

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

  /* список сохраненных фильмов */
  listItem() {
    return fetch(`${this._url}/${'movies'}`, {
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this.url}/${'users'}/${'me'}`, {
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  }

  /* getInitialsCards */
  getSavedMovies() {
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

  /* country, director, duration, year, description, image, trailerLink, thumbail, movieId, nameRU, nameEN */

  createMovie(...) {
    return fetch(`${this.url}/${'movies'}`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        thumbail,
        movieId,
        nameRU,
        nameEN,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this.url}/${cards}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  }




} // end of Api

const options = {
  baseUrl: 'your-movie-explorer.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const api = new Api(options);
