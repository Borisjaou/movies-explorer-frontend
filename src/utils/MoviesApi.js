/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

/* Запросы к сервису beatfilm-movies */

class Search {
  constructor(config) {
    this.url = config.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  searchMovie() {
    return fetch(this.url, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const options = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const search = new Search(options);
