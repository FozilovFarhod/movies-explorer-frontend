import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function Movies() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cardsToShowCounter, setCardsToShowCounter] = useState(12);
  const [shortFilmCheckboxStatus, setShortFilmCheckboxStatus] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [moviesToShow, setMoviesToShow] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    mainApi.getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function onLikeClick(card) {
    mainApi.postMovies(card)
      .then((addedCard) => {
        setSavedMovies([...savedMovies, addedCard]);
        console.log('фильм добавлен');
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function onDislike(card) {
    const id = savedMovies.find((i) => i.movieId === card.id)._id;
    mainApi.deleteMovie(id)
      .then((res) => {
        const filteredSavedMovies = savedMovies.filter((i) => i.id !== id);
        setSavedMovies(filteredSavedMovies);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function slicer(array) {
    return array.slice(0, cardsToShowCounter);
  }
  function filter(array) {
    if (shortFilmCheckboxStatus) {
      return array.filter((card) => card.duration <= 75);
    }
    return array;
  }
  function find(array) {
    return array.filter(
      (card) => card.nameRU.toLowerCase().includes(searchInputValue.toLowerCase()),
    );
  }
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
    const movies = JSON.parse(window.localStorage.getItem('movies'));
    if (movies) {
      setMoviesToShow(movies);
    }
  }, []);
  function moreButtonHandler(e) {
    e.preventDefault();
    setCardsToShowCounter(cardsToShowCounter + 3);
  }

  function handleChangeFilterCheckbox(e) {
    setShortFilmCheckboxStatus(e.target.checked);
  }
  function handleSearchInput(e) {
    setSearchInputValue(e.target.value);
  }
  function handleSearchFormSubmit(e) {
    e.preventDefault();
    const foundCards = find(cards);
    setMoviesToShow(foundCards);
    window.localStorage.setItem('movies', JSON.stringify(foundCards));
  }
  console.log(savedMovies);
  const cardsToShow = slicer(filter(moviesToShow));
  return (
        <React.Fragment>
            <Header/>
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
                moreButtonHandler={moreButtonHandler}
                savedMovies={savedMovies}
                onLikeClick={onLikeClick}
                onDislike={onDislike}
            /> : 'Ничего не найдено'
            }

        </React.Fragment>
  );
}

export default Movies;
