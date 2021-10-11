import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  isLoading,
  cardsToShow,
  moreButtonHandler,
  savedMovies,
  onLikeClick,
  onDislike,
}) {
  // const [filteredCards, setFilteredCards] = useState([]);
  // let cardsNew;

  // function filterCards(text) {
  //   // eslint-disable-next-line max-len
  // eslint-disable-next-line max-len
  //   setFilteredCards(cards.filter((card) => card.nameRU.toLowerCase().includes(text.toLowerCase())));
  // }

  return (
        <section className='movies'>
            {isLoading && <Preloader/>}
            <ul className='movies__cards'>
                {cardsToShow.map((card) => (
                    <MoviesCard
                        card={card}
                        key={card.id}
                        savedMovies={savedMovies}
                        onLikeClick={onLikeClick}
                        onDislike={onDislike}
                    />))}
            </ul>
            <button className='movies__more-button page__link-transparency' onClick={moreButtonHandler}>Ещё</button>
        </section>
  );
}

export default MoviesCardList;
