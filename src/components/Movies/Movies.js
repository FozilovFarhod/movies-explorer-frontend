import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
        <React.Fragment>
            <Header/>
            <SearchForm/>
            <MoviesCardList/>
        </React.Fragment>
  );
}

export default Movies;
