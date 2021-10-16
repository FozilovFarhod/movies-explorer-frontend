import React, { useEffect, useState, useContext } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({
  isMobile,
  pageWidth,
  isLoggedIn,
  cards,
  likedMovies,
  filter,
  onLikeClick,
  onDislike,
  isGetMoviesFetchError,
  infoToolTipText,
}) {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [cardsToShowCounter, setCardsToShowCounter] = useState(0);
  const [shortFilmCheckboxStatus, setShortFilmCheckboxStatus] = useState(false);
  const [isLoading] = useState(false);
  const [isMoreButton, setIsMoreButton] = useState(false);
  const [searchIsRun, setSearchIsRun] = useState(false);
  const [emptyErrorMessage, setEmptyErrorMessage] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (pageWidth <= 480) {
      setCardsToShowCounter(5);
    } else if (pageWidth <= 768) {
      setCardsToShowCounter(8);
    } else {
      setCardsToShowCounter(12);
    }
  }, [pageWidth]);
  function slicer(array) {
    return array.slice(0, cardsToShowCounter);
  }
  function moreButtonHandler(e) {
    e.preventDefault();
    if (isMobile) {
      setCardsToShowCounter(cardsToShowCounter + 5);
    } else if (pageWidth <= 768) {
      setCardsToShowCounter(cardsToShowCounter + 2);
    } else {
      setCardsToShowCounter(cardsToShowCounter + 3);
    }
  }
  function find(array) {
    return array.filter(
      (card) => card.nameRU.toLowerCase().includes(searchInputValue.toLowerCase()),
    );
  }
  function handleChangeFilterCheckbox(e) {
    setShortFilmCheckboxStatus(e.target.checked);
  }
  function handleSearchInput(e) {
    setSearchInputValue(e.target.value);
  }
  function handleSearchFormSubmit(e) {
    e.preventDefault();
    setSearchIsRun(true);
    const foundCards = find(cards);
    setMoviesToShow(foundCards);
    if (foundCards.length !== 0) {
      const moviesToSave = {
        user: currentUser.email,
        searchPhrase: searchInputValue,
        movies: foundCards,
      };
      window.localStorage.setItem(`movies-${currentUser.email}`, JSON.stringify(moviesToSave));
    }
  }
  useEffect(() => {
    const savedMoviesObject = JSON.parse(window.localStorage.getItem(`movies-${currentUser.email}`));
    if (savedMoviesObject) {
      setMoviesToShow(savedMoviesObject.movies);
      setSearchInputValue(savedMoviesObject.searchPhrase);
    }
  }, [currentUser]);
  const filteredCards = filter(shortFilmCheckboxStatus, moviesToShow);
  const cardsToShow = slicer(filteredCards);
  function showNotFoundNotification() {
    if (!searchIsRun && moviesToShow.length === 0) {
      return (
        <React.Fragment>
            <p>Начните поиск</p>
          </React.Fragment>
      );
    } if (searchIsRun && moviesToShow.length === 0) {
      return (
          <React.Fragment>
            <p>Ничего не найдено</p>
          </React.Fragment>
      );
    } if (moviesToShow.length !== 0 && cardsToShow.length === 0) {
      return (
          <React.Fragment>
            <p>Среди найденных фильмов короткометражных нет</p>
          </React.Fragment>
      );
    }
    return null;
  }
  useEffect(() => {
    if (cardsToShowCounter < filteredCards.length) {
      setIsMoreButton(true);
    } else {
      setIsMoreButton(false);
    }
  }, [cardsToShow, cardsToShowCounter]);

  return (
        <React.Fragment>
          <Header
          isLoggedIn={isLoggedIn}
          />
            <SearchForm
                searchInputValue={searchInputValue}
                handleChangeFilterCheckbox={ handleChangeFilterCheckbox }
                shortFilmCheckboxStatus={ shortFilmCheckboxStatus }
                handleSearchFormSubmit={handleSearchFormSubmit}
                handleSearchInput={handleSearchInput}
                setEmptyErrorMessage={setEmptyErrorMessage}
            />
            <p>{emptyErrorMessage}</p>
            {
            showNotFoundNotification()
            || <MoviesCardList
                isLoading={isLoading}
                cardsToShow={cardsToShow}
                likedMovies={likedMovies}
                onLikeClick={onLikeClick}
                onDislike={onDislike}
            />
            }
            {isGetMoviesFetchError && <p>{infoToolTipText}</p>}
            {
            isMoreButton
            && <button className='movies__more-button page__link-transparency' onClick={moreButtonHandler}>Ещё</button>
            }
          <Footer/>
        </React.Fragment>
  );
}

export default Movies;
