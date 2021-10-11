class MoviesApi {
  constructor({ moviesApiUrl }) {
    this.moviesUrl = moviesApiUrl;
    this.responseHandler = this.responseHandler.bind(this);
  }

  getMovies() {
    return fetch(this.moviesUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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

const moviesApi = new MoviesApi({
  moviesApiUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;
