import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  cardsToShow,
  likedMovies,
  onLikeClick,
  onDislike,
}) {
  return (
        <section className='movies'>
            <ul className='movies__cards'>
                {cardsToShow.map((card) => (
                    <MoviesCard
                        card={card}
                        key={card.movieId || card.id}
                        likedMovies={likedMovies}
                        onLikeClick={onLikeClick}
                        onDislike={onDislike}
                    />))}
            </ul>
        </section>
  );
}

export default MoviesCardList;
