/* eslint-disable import/prefer-default-export */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */

/* Аутентификация */

class Auth {
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
} // end of Api

const options = {
  baseUrl: 'your-movie-explorer.nomoredomains.work',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const auth = new Auth(options);
