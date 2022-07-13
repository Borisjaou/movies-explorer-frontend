/* Запросы к сервису beatfilm-movies */

/*   Поиска по фильмам. Поиск по названию
  На запрос приходит весь список фильмов, я должен отфильтровать и осуществить поиск. Для этого нужно написать отдельный компонент */


class Search {
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

  searcMovie() {
    return fetch(this.url, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkResponse);
  }
}

const options = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const auth = new Search(options);
