import React, { useState, useEffect } from 'react';
import {
  Route,
  Switch,
  useHistory,
  Redirect,
} from 'react-router-dom';
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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [likedMovies, setLikedMovies] = useState([]);
  const [isMobile, setIsMobile] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  const [infoToolTipText, setInfoToolTipText] = useState('');
  const [isGetMoviesFetchError, setIsGetMoviesFetchError] = useState(false);
  const history = useHistory();
  function updateWidth() {
    setPageWidth(document.documentElement.scrollWidth);
  }
  // Определеяем ширину экрана и проверяем на мобильное устройство
  useEffect(() => {
    setPageWidth(document.documentElement.scrollWidth);
    window.addEventListener('resize', () => {
      setTimeout(updateWidth, 1000);
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });
  useEffect(() => {
    const isJwt = localStorage.getItem('isLoggedIn');
    if (isJwt) {
      mainApi.checkToken()
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((res) => {
          setIsLoggedIn(false);
          console.log(`Ошибка при проверке токена ${res}`);
        });
    } else {
      setIsLoggedIn(false);
      console.log('Пользователь не авторизовался');
    }
  }, []);
  useEffect(() => {
    const isJwt = localStorage.getItem('isLoggedIn');
    if (isJwt) {
      mainApi.getLikedMovies()
        .then((res) => {
          setLikedMovies(res);
        })
        .catch((err) => {
          setIsGetMoviesFetchError(true);
          setInfoToolTipText(`Ошибка при получении фильмов ${err}`);
          console.log(`Ошибка при получении сохраненных фильмов ${err}`);
        });
    }
  }, [isLoggedIn]);
  useEffect(() => {
    const isJwt = localStorage.getItem('isLoggedIn');
    if (isJwt) {
      moviesApi.getMovies()
        .then((res) => {
          setCards(res);
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((err) => {
          setIsGetMoviesFetchError(true);
          setInfoToolTipText(`Ошибка при получении фильмов ${err}`);
          console.log(`Ошибка при получении фильмов ${err}`);
        });
    }
  }, []);
  useEffect(() => {
    const isJwt = localStorage.getItem('isLoggedIn');
    if (isJwt) {
      mainApi.getUserData()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          setIsSuccess(false);
          setIsInfoTooltipPopupOpen(true);
          setInfoToolTipText(`Ошибка ${err}`);
        });
    }
  }, [isLoggedIn]);

  function filter(shortFilmCheckboxStatus, array) {
    if (shortFilmCheckboxStatus) {
      return array.filter((card) => card.duration <= 75);
    }
    return array;
  }

  function onDislike(card) {
    const id = likedMovies.find((i) => i.movieId === card.id)._id;
    mainApi.deleteMovie(id)
      .then(() => {
        const filteredLikedMovies = likedMovies.filter((i) => i._id !== id);
        setLikedMovies(filteredLikedMovies);
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsInfoTooltipPopupOpen(true);
        setInfoToolTipText(`Ошибка ${err}`);
      });
  }
  function onDelete(card) {
    mainApi.deleteMovie(card._id)
      .then(() => {
        const filteredLikedMovies = likedMovies.filter((i) => i._id !== card._id);
        setLikedMovies(filteredLikedMovies);
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsInfoTooltipPopupOpen(true);
        setInfoToolTipText(`Ошибка ${err}`);
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
      .catch((err) => {
        setIsSuccess(false);
        setIsInfoTooltipPopupOpen(true);
        setInfoToolTipText(`Ошибка ${err}`);
      });
  }
  function onRegister(email, password, name) {
    mainApi.signUp(email, password, name)
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        onLogin(email, password);
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsInfoTooltipPopupOpen(true);
        setInfoToolTipText(`Ошибка ${err}`);
      });
  }

  function onLikeClick(card) {
    mainApi.postMovies(card)
      .then((addedCard) => {
        setLikedMovies([...likedMovies, addedCard]);
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsInfoTooltipPopupOpen(true);
        setInfoToolTipText(`Ошибка ${err}`);
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
      .catch((err) => {
        setIsSuccess(false);
        setIsInfoTooltipPopupOpen(true);
        setInfoToolTipText(`Ошибка ${err}`);
      });
  }
  function handleUpdateUser(email, name) {
    mainApi.editUserData(email, name)
      .then((userDataUpdated) => {
        setCurrentUser(userDataUpdated);
        setIsSuccess(true);
        setIsInfoTooltipPopupOpen(true);
        setInfoToolTipText('Данные успешно обновлены');
      })
      .catch((err) => {
        setIsSuccess(false);
        setIsInfoTooltipPopupOpen(true);
        setInfoToolTipText(`Ошибка ${err}`);
      });
  }
  return (
      <CurrentUserContext.Provider value={currentUser}>
      <React.Fragment>
          <InfoTooltip
              isOpen={isInfoTooltipPopupOpen}
              isSuccess={isSuccess}
              onClose={closeAllPopups}
              onOverlayClose={handleOverlayClose}
              onEscClose={handleEscClose}
              infoToolTipText={infoToolTipText}
          />
          <Switch>
          <Route exact path='/'>
              <Header
                  isLoggedIn={isLoggedIn}
              />
          <Main/>
          <Footer/>
          </Route>
          <ProtectedRoute path='/movies'
              isMobile={isMobile}
              pageWidth={pageWidth}
              isLoggedIn={isLoggedIn}
              component={Movies}
              cards={cards}
              filter={filter}
              likedMovies={likedMovies}
              onLikeClick={onLikeClick}
              onDislike={onDislike}
              isGetMoviesFetchError={isGetMoviesFetchError}
              infoToolTipText={infoToolTipText}
          />
          <ProtectedRoute path='/saved-movies'
            isLoggedIn={isLoggedIn}
                  component={SavedMovies}
                  isLoading={isLoading}
                  likedMovies={likedMovies}
                  onLikeClick={onLikeClick}
                  onDelete={onDelete}
                  filter={filter}
                  isGetMoviesFetchError={isGetMoviesFetchError}
                  infoToolTipText={infoToolTipText}
          />
          <ProtectedRoute path='/profile'
              isLoggedIn={isLoggedIn}
              component={Profile}
              onSignOut = {onSignOut}
              onEditProfile={handleUpdateUser}
          />
          <Route path='/signin'>
            {() => (!isLoggedIn ? <Login onLogin={onLogin}/> : <Redirect to="/"/>)}
          </Route>
          <Route path='/signup'>
          {() => (!isLoggedIn ? <Register onRegister={onRegister}/> : <Redirect to="/"/>)}
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
