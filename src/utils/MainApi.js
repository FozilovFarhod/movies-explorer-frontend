class MainApi {
  constructor({ mainUrl, resourceBaseUrl }) {
    this.mainUrl = mainUrl;
    this.resourceBaseUrl = resourceBaseUrl;
  }

  postMovies(card) {
    return fetch(`${this.mainUrl}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: `${this.resourceBaseUrl}${card.image.url}`,
        trailer: card.trailerLink,
        thumbnail: `${this.resourceBaseUrl}${card.image.formats.thumbnail.url}`,
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      }),
    })
      .then((res) => this._responseHandler(res));
  }

  deleteMovie(id) {
    return fetch(`${this.mainUrl}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => this._responseHandler(res));
  }

  signUp(email, password, name) {
    return fetch(`${this.mainUrl}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => this._responseHandler(res));
  }

  getLikedMovies() {
    return fetch(`${this.mainUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._responseHandler(res));
  }

  signIn(email, password) {
    return fetch(`${this.mainUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => this._responseHandler(res));
  }

  getUserData() {
    return fetch(`${this.mainUrl}/users/me`,
      {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then((res) => this._responseHandler(res));
  }

  checkToken() {
    return fetch(`${this.mainUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._responseHandler(res));
  }

  signOut() {
    return fetch(`${this.mainUrl}/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._responseHandler(res));
  }

  editUserData(email, name) {
    return fetch(`${this.mainUrl}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
      }),
    })
      .then((res) => this._responseHandler(res));
  }

  _responseHandler = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }
}
const mainApi = new MainApi(
  {
    mainUrl: 'http://localhost:3000',
    resourceBaseUrl: 'https://api.nomoreparties.co',
  },
);
export default mainApi;
