import React from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';

function SavedMovies() {
  return (
        <React.Fragment>
            <Header/>
            <SearchForm/>
            <MoviesCardList/>
        </React.Fragment>
  );
}

export default SavedMovies;
