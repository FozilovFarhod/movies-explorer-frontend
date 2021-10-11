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
import mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isSuccessRegister, setIsSuccessRegister] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const isJwt = localStorage.getItem('isLoggedIn');
    if (isJwt) {
      mainApi.checkToken()
        .then(() => {
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
    mainApi.getUserData()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((res) => {
        console.log(`Ошибка при получении данных пользователя ${res}`);
      });
  }, [isLoggedIn, setCurrentUser]);
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
        history.push('/');
      })
      .catch((res) => {
        setIsSuccessRegister(false);
        setIsInfoTooltipPopupOpen(true);
        console.log(`Something goes wrong ${res}`);
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
          isLoggedIn = {isLoggedIn}
          />
          <Main/>
          <Footer/>
          </Route>
          <Route path='/movies'>
              <Movies/>
              <Footer/>
          </Route>
          <Route path='/saved-movies'>
              <SavedMovies/>
              <Footer/>
          </Route>
          <Route path='/profile'>
              <Header
                  isLoggedIn = {isLoggedIn}
              />
              <Profile
              onSignOut = {onSignOut}
              onEditProfile={handleUpdateUser}
              />
          </Route>
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
