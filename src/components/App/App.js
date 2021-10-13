import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import InfoTooltip from '../InfoToolTip/InfoToolTip';
import ProtectedRoute from '../../utils/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccessRegister, setIsSuccessRegister] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [likedMovies, setLikedMovies] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const isJwt = localStorage.getItem('isLoggedIn');
    if (isJwt) {
      mainApi.checkToken()
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((res) => {
          console.log(`Ошибка при проверке токена ${res}`);
        });
    } else {
      console.log('Пользователь не авторизовался');
    }
  },
  [isLoggedIn]);
  useEffect(() => {
    mainApi.getSavedMovies()
      .then((res) => {
        setLikedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]);
  useEffect(() => {
    moviesApi.getMovies()
      .then((res) => {
        setCards(res);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    mainApi.getUserData()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((res) => {
        console.log(`Ошибка при получении данных пользователя ${res}`);
      });
  }, [isLoggedIn, setCurrentUser]);
  function filter(shortFilmCheckboxStatus, array) {
    if (shortFilmCheckboxStatus) {
      return array.filter((card) => card.duration <= 75);
    }
    return array;
  }

  function onDislike(card) {
    const id = likedMovies.find((i) => i.movieId === card.id)._id;
    console.log(id);
    mainApi.deleteMovie(id)
      .then(() => {
        const filteredLikedMovies = likedMovies.filter((i) => i._id !== id);
        setLikedMovies(filteredLikedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function onDelete(card) {
    mainApi.deleteMovie(card._id)
      .then(() => {
        const filteredLikedMovies = likedMovies.filter((i) => i._id !== card._id);
        setLikedMovies(filteredLikedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function onRegister(email, password, name) {
    mainApi.signUp(email, password, name)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function onLogin(email, password) {
    mainApi.signIn(email, password)
      .then((res) => {
        setCurrentUser(res);
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch((res) => {
        setIsSuccessRegister(false);
        setIsInfoTooltipPopupOpen(true);
        console.log(`Something goes wrong ${res}`);
      });
  }
  function onLikeClick(card) {
    mainApi.postMovies(card)
      .then((addedCard) => {
        setLikedMovies([...likedMovies, addedCard]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function closeAllPopups() {
    setIsInfoTooltipPopupOpen(false);
  }
  function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }
  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }
  function onSignOut() {
    mainApi.signOut()
      .then(() => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        history.push('./');
      })
      .catch((res) => {
        console.log(`Не получилось удалить jwt ${res}`);
      });
  }
  function handleUpdateUser(email, name) {
    mainApi.editUserData(email, name)
      .then((userDataUpdated) => {
        setCurrentUser(userDataUpdated);
      })
      .catch((res) => {
        console.log(`Ошибка при обновлении профиля пользователя ${res}`);
      });
  }
  return (
      <CurrentUserContext.Provider value={currentUser}>
      <React.Fragment>
          <InfoTooltip
              isOpen={isInfoTooltipPopupOpen}
              isSuccessRegister={isSuccessRegister}
              onClose={closeAllPopups}
              onOverlayClose={handleOverlayClose}
              onEscClose={handleEscClose}
          />
          <Switch>
          <Route exact path='/'>
              <Header
                  isLoggedIn={isLoggedIn}
              />
          <Main/>
          <Footer/>
          </Route>
          <Route path='/movies'>
              <Header
                  isLoggedIn={isLoggedIn}
              />
              <Movies
              cards={cards}
              filter={filter}
              likedMovies={likedMovies}
              onLikeClick={onLikeClick}
              onDislike={onDislike}
              />
              <Footer/>
          </Route>
          <Route path='/saved-movies'>
              <Header
                  isLoggedIn={isLoggedIn}
              />
              <SavedMovies
                  isLoading={isLoading}
                  likedMovies={likedMovies}
                  onLikeClick={onLikeClick}
                  onDelete={onDelete}
                  filter={filter}
              />
              <Footer/>
          </Route>
          <ProtectedRoute path='/profile'
              isLoggedIn={isLoggedIn}
              component={Profile}
              onSignOut = {onSignOut}
              onEditProfile={handleUpdateUser}
          />
          <Route path='/signin'>
              <Login
              onLogin={onLogin}
              />
          </Route>
          <Route path='/signup'>
              <Register
                  onRegister={onRegister}
              />
          </Route>
          <Route path='*'>
              <NotFound/>
          </Route>
          </Switch>
      </React.Fragment>
      </CurrentUserContext.Provider>
  );
}

export default App;
