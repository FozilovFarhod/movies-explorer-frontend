import React from 'react';
import { Route, Switch } from 'react-router-dom';
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

function App() {
  return (
      <React.Fragment>
          <Switch>
          <Route exact path='/'>
          <Header/>
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
              <Profile/>
          </Route>
          <Route path='/signin'>
              <Login/>
          </Route>
          <Route path='/signup'>
              <Register/>
          </Route>
          <Route path='*'>
              <NotFound/>
          </Route>
          </Switch>
      </React.Fragment>
  );
}

export default App;
