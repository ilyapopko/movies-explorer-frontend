class MoviesApi {
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

  getAllMovies(data) {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
      credentials: this._credentials,
      body: JSON.stringify(data)
    })
      .then(this._processingResult);
  }

}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'same-origin',
});


