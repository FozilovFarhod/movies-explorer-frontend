class MainApi {
  constructor({ mainUrl }) {
    this.mainUrl = mainUrl;
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
        image: 'https://yandex.ru',
        trailer: 'https://yandex.ru',
        thumbnail: 'https://yandex.ru',
        movieId: card.id,
        nameRU: card.nameRU,
        nameEN: card.nameEN,
      }),
    })
      .then((res) => this.responseHandler(res));
  }

  deleteMovie(id) {
    return fetch(`${this.mainUrl}/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((res) => this.responseHandler(res));
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
      .then((res) => this.responseHandler(res));
  }

  getSavedMovies() {
    return fetch(`${this.mainUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this.responseHandler(res));
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
      .then((res) => this.responseHandler(res));
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
      .then((res) => this.responseHandler(res));
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
      .then((res) => this.responseHandler(res));
  }

  signOut() {
    return fetch(`${this.mainUrl}/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this.responseHandler(res));
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
      .then((res) => this.responseHandler(res));
  }

  responseHandler = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }
}
const mainApi = new MainApi(
  { mainUrl: 'http://localhost:3000' },
);
export default mainApi;
