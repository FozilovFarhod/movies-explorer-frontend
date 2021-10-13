import React, { useEffect, useState, useContext } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Movies({
  cards,
  likedMovies,
  filter,
  onLikeClick,
  onDislike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [cardsToShowCounter, setCardsToShowCounter] = useState(12);
  const [shortFilmCheckboxStatus, setShortFilmCheckboxStatus] = useState(false);
  const [isLoading] = useState(false);
  const [searchIsRun, setSearchIsRun] = useState(false);
  console.log(searchIsRun);
  function slicer(array) {
    return array.slice(0, cardsToShowCounter);
  }
  function moreButtonHandler(e) {
    e.preventDefault();
    setCardsToShowCounter(cardsToShowCounter + 3);
  }
  function find(array) {
    return array.filter(
      (card) => card.nameRU.toLowerCase().includes(searchInputValue.toLowerCase()),
    );
  }
  useEffect(() => {
    const savedMoviesObject = JSON.parse(window.localStorage.getItem(`movies-${currentUser.email}`));
    console.log(currentUser);
    if (savedMoviesObject) {
      setMoviesToShow(savedMoviesObject.movies);
      console.log(moviesToShow);
    }
  }, []);

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
    const moviesToSave = {
      user: currentUser.email,
      searchPhrase: searchInputValue,
      movies: foundCards,
    };
    window.localStorage.setItem(`movies-${currentUser.email}`, JSON.stringify(moviesToSave));
  }
  const cardsToShow = slicer(filter(shortFilmCheckboxStatus, cards));
  return (
        <React.Fragment>
            <SearchForm
                handleChangeFilterCheckbox={ handleChangeFilterCheckbox }
                shortFilmCheckboxStatus={ shortFilmCheckboxStatus }
                handleSearchFormSubmit={handleSearchFormSubmit}
                handleSearchInput={handleSearchInput}
            />
            {cardsToShow.length > 0
              ? <MoviesCardList
                isLoading={isLoading}
                cardsToShow={cardsToShow || []}
                likedMovies={likedMovies}
                onLikeClick={onLikeClick}
                onDislike={onDislike}
            /> : 'Ничего не найдено'
            }
          <button className='movies__more-button page__link-transparency' onClick={moreButtonHandler}>Ещё</button>
        </React.Fragment>
  );
}

export default Movies;
