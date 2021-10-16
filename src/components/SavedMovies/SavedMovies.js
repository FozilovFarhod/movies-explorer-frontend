import React, { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({
  isLoggedIn,
  isLoading,
  likedMovies,
  onLikeClick,
  onDelete,
  filter,
  isGetMoviesFetchError,
  infoToolTipText,
}) {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [shortFilmCheckboxStatus, setShortFilmCheckboxStatus] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [searchIsRun, setSearchIsRun] = useState(false);

  function find(array) {
    return array.filter(
      (card) => card.nameRU.toLowerCase().includes(searchInputValue.toLowerCase()),
    );
  }
  function handleChangeFilterCheckbox(e) {
    setShortFilmCheckboxStatus(e.target.checked);
  }
  function handleSearchInput(e) {
    if (!e.target.value) {
      setFoundMovies([]);
      setSearchIsRun(false);
    }
    setSearchInputValue(e.target.value);
  }
  function handleSearchFormSubmit(e) {
    e.preventDefault();
    setSearchIsRun(true);
    const foundCards = find(likedMovies);
    setFoundMovies(foundCards);
  }
  function handleDeleteInSearchResult(card) {
    console.log(card);
    console.log(foundMovies);
    onDelete(card);
    setFoundMovies(foundMovies.filter((i) => i._id !== card._id));
  }
  function showNotFoundNotification() {
    if (likedMovies.length === 0) {
      return (
      <React.Fragment>
          <p>Нет сохраненных фильмов</p>
      </React.Fragment>
      );
    } if (likedMovies && !searchIsRun
        && filter(shortFilmCheckboxStatus, likedMovies).length === 0) {
      return (
          <React.Fragment>
            <p>Среди сохраненных короткометражных фильмов нет</p>
          </React.Fragment>
      );
    } if (searchIsRun && foundMovies.length === 0) {
      return (
          <React.Fragment>
            <p>Среди сохраненных фильмов нет фильмов соответствующих вашему запросу</p>
          </React.Fragment>
      );
    } if (foundMovies && searchIsRun && filter(shortFilmCheckboxStatus, foundMovies).length === 0) {
      return (
          <React.Fragment>
            <p>Среди найденных фильмов короткометражных нет</p>
          </React.Fragment>
      );
    }
    return null;
  }
  const cardsToShow = foundMovies.length === 0
    ? filter(shortFilmCheckboxStatus, likedMovies)
    : filter(shortFilmCheckboxStatus, foundMovies);
  return (
        <React.Fragment>
          <Header
        isLoggedIn={isLoggedIn}
        />
            <SearchForm
                handleChangeFilterCheckbox={handleChangeFilterCheckbox}
                shortFilmCheckboxStatus={shortFilmCheckboxStatus}
                handleSearchFormSubmit={handleSearchFormSubmit}
                handleSearchInput={handleSearchInput}
            />
          {
            showNotFoundNotification()
            || <MoviesCardList
                isLoading={isLoading}
                cardsToShow={cardsToShow}
                onLikeClick={onLikeClick}
                onDislike={searchIsRun ? handleDeleteInSearchResult : onDelete}
            />
          }
          {isGetMoviesFetchError && <p>{infoToolTipText}</p>}
          <Footer/>
        </React.Fragment>
  );
}

export default SavedMovies;
