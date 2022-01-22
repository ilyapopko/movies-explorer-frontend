class MainApi {
  _url
  _headers
  _credentials

  constructor(property) {
    this._url = property.url;
    this._headers = property.headers;
    this._credentials = property.credentials;
  }

  _processingResult(response) {
    return response.ok ? response.json() : Promise.reject({
      status: response.status,
      message: response.statusText,
      url: response.url
    });
  }

  register({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({ name, password, email })
    })
      .then(this._processingResult);
  }

  authorize({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({ password, email })
    })
      .then(this._processingResult);
  }

  logout() {
    return fetch(`${this._url}/signout`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(this._processingResult);
  }

  getUserProperties() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(result => {
        return this._processingResult(result);
      });
  }

  updateUser({name, email}) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({name, email})
    })
      .then(result => {
        return this._processingResult(result);
      });
  }

  getSavedCards() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(result => {
        return this._processingResult(result);
      });
  }

  saveCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify({name: data.name, link: data.link})
    })
      .then(result => {
        return this._processingResult(result);
      });
  }

  deleteCard(idCard) {
    return fetch(`${this._url}/cards/${idCard}`, {
      method: 'DELETE',
      headers: this._headers,
      credentials: this._credentials,
    })
      .then(result => {
        return this._processingResult(result);
      });
  }

}

export const userApi = new MainApi({
  url: 'https://movies-explorer-popko.nomoredomains.rocks/api',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include',
});