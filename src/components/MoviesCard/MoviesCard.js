import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({
  card, likedMovies, onLikeClick, onDislike,
}) {
  const location = useLocation();
  const isLiked = location.pathname === '/movies' ? likedMovies.some((i) => i.movieId === card.id) : true;
  function handleLikeClick() {
    if (!isLiked) {
      return onLikeClick(card);
    }
    return onDislike(card);
  }
  function getTimeFromMins(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }

  return (
        <li className="card" id={card.id}>
          <a className='card__trailer-link' target={'_blank'} href={`${card.trailerLink}`}>
            <img className="card__image" alt={`Постер фильма ${card.nameRU}`} src={`${location.pathname === '/movies' ? 'https://api.nomoreparties.co' : ''}${location.pathname === '/movies' ? card.image.url : card.image}`}/>
          </a>
            <div className="card__image-caption">
                <h2 className="card__title">{card.nameRU}</h2>
              <p className='card__movie-duration'>{getTimeFromMins(card.duration)}</p>
            </div>
          <button type="button" aria-label="addToSavedIcon"
                  className={isLiked ? 'card__button_type_liked' : 'card__button_type_like'} onClick={handleLikeClick}>
          </button>
        </li>
  );
}

export default MoviesCard;
