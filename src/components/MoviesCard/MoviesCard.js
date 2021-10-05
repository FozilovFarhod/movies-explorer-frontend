import React from 'react';
import './MoviesCard.css';

function MoviesCard() {
  const card = [{
    id: 1,
    nameRU: '«Роллинг Стоунз» в изгнании',
    nameEN: 'Stones in Exile',
    director: 'Стивен Кайак ',
    country: 'США',
    year: '2010',
    duration: 61,
    description: 'В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.',
    trailerLink: 'https://www.youtube.com/watch?v=UXcqcdYABFw',
    created_at: '2020-11-23T14:12:21.376Z',
    updated_at: '2020-11-23T14:12:21.376Z',
    image: {
      id: 1,
      name: 'stones-in-exile',
      alternativeText: '',
      caption: '',
      width: 512,
      height: 279,
      formats: {
        thumbnail: {
          hash: 'thumbnail_stones_in_exile_b2f1b8f4b7', ext: '.jpeg', mime: 'image/jpeg', width: 245, height: 134, size: 8.79, path: null, url: '/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg',
        },
        small: {
          hash: 'small_stones_in_exile_b2f1b8f4b7', ext: '.jpeg', mime: 'image/jpeg', width: 500, height: 272, size: 25.68, path: null, url: '/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg',
        },
      },
      hash: 'stones_in_exile_b2f1b8f4b7',
      ext: '.jpeg',
      mime: 'image/jpeg',
      size: 25.53,
      url: '/uploads/stones_in_exile_b2f1b8f4b7.jpeg',
      previewUrl: null,
      provider: 'local',
      provider_metadata: null,
      created_at: '2020-11-23T14:11:57.313Z',
      updated_at: '2020-11-23T14:11:57.313Z',
    },
  }];
  // tempVar
  // const isOwn = true;
  function handleClick() {

  }
  //
  function handleLikeClick() {
  }
  //
  // function handleDeleteCard() {
  //   console.log('delete card Handler');
  // }
  function getTimeFromMins(duration) {
    const hours = Math.trunc(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
  }
  return (
      <>
        <li className="card" id={card[0].id}>
          <a className='card__trailer-link' target={'_blank'} href={`${card[0].trailerLink}`}>
            <img className="card__image" alt={`Постер фильма ${card[0].nameRU}`} src={`https://api.nomoreparties.co${card[0].image.url}`} onClick={handleClick}/>
          </a>
            <div className="card__image-caption">
                <h2 className="card__title">{card[0].nameRU}</h2>
              <p className='card__movie-duration'>{getTimeFromMins(card[0].duration)}</p>
            </div>
          <button type="button" aria-label="addToSavedIcon"
                  className='card__button_type_liked' onClick={handleLikeClick}>
          </button>
        </li>
        <li className="card" id={card[0].id}>
          <a className='card__trailer-link' target={'_blank'} href={`${card[0].trailerLink}`}>
            <img className="card__image" alt={`Постер фильма ${card[0].nameRU}`} src={`https://api.nomoreparties.co${card[0].image.url}`} onClick={handleClick}/>
          </a>
          <div className="card__image-caption">
            <h2 className="card__title">{card[0].nameRU}</h2>
            <p className='card__movie-duration'>{getTimeFromMins(card[0].duration)}</p>
          </div>
          <button type="button" aria-label="addToSavedIcon"
                  className='card__button_type_dislike' onClick={handleLikeClick}>
          </button>
        </li>
        <li className="card" id={card[0].id}>
          <a className='card__trailer-link' target={'_blank'} href={`${card[0].trailerLink}`}>
            <img className="card__image" alt={`Постер фильма ${card[0].nameRU}`} src={`https://api.nomoreparties.co${card[0].image.url}`} onClick={handleClick}/>
          </a>
          <div className="card__image-caption">
            <h2 className="card__title">{card[0].nameRU}</h2>
            <p className='card__movie-duration'>{getTimeFromMins(card[0].duration)}</p>
          </div>
          <button type="button" aria-label="addToSavedIcon"
                  className='card__button_type_dislike' onClick={handleLikeClick}>
          </button>
        </li>
        <li className="card" id={card[0].id}>
          <a className='card__trailer-link' target={'_blank'} href={`${card[0].trailerLink}`}>
            <img className="card__image" alt={`Постер фильма ${card[0].nameRU}`} src={`https://api.nomoreparties.co${card[0].image.url}`} onClick={handleClick}/>
          </a>
          <div className="card__image-caption">
            <h2 className="card__title">{card[0].nameRU}</h2>
            <p className='card__movie-duration'>{getTimeFromMins(card[0].duration)}</p>
          </div>
          <button type="button" aria-label="addToSavedIcon"
                  className='card__button_type_dislike' onClick={handleLikeClick}>
          </button>
        </li>
        <li className="card" id={card[0].id}>
          <a className='card__trailer-link' target={'_blank'} href={`${card[0].trailerLink}`}>
            <img className="card__image" alt={`Постер фильма ${card[0].nameRU}`} src={`https://api.nomoreparties.co${card[0].image.url}`} onClick={handleClick}/>
          </a>
          <div className="card__image-caption">
            <h2 className="card__title">{card[0].nameRU}</h2>
            <p className='card__movie-duration'>{getTimeFromMins(card[0].duration)}</p>
          </div>
          <button type="button" aria-label="addToSavedIcon"
                  className='card__button_type_dislike' onClick={handleLikeClick}>
          </button>
        </li>
        <li className="card" id={card[0].id}>
          <a className='card__trailer-link' target={'_blank'} href={`${card[0].trailerLink}`}>
            <img className="card__image" alt={`Постер фильма ${card[0].nameRU}`} src={`https://api.nomoreparties.co${card[0].image.url}`} onClick={handleClick}/>
          </a>
          <div className="card__image-caption">
            <h2 className="card__title">{card[0].nameRU}</h2>
            <p className='card__movie-duration'>{getTimeFromMins(card[0].duration)}</p>
          </div>
          <button type="button" aria-label="addToSavedIcon"
                  className='card__button_type_dislike' onClick={handleLikeClick}>
          </button>
        </li>
        <li className="card" id={card[0].id}>
          <a className='card__trailer-link' target={'_blank'} href={`${card[0].trailerLink}`}>
            <img className="card__image" alt={`Постер фильма ${card[0].nameRU}`} src={`https://api.nomoreparties.co${card[0].image.url}`} onClick={handleClick}/>
          </a>
          <div className="card__image-caption">
            <h2 className="card__title">{card[0].nameRU}</h2>
            <p className='card__movie-duration'>{getTimeFromMins(card[0].duration)}</p>
          </div>
          <button type="button" aria-label="addToSavedIcon"
                  className='card__button_type_dislike' onClick={handleLikeClick}>
          </button>
        </li>
        <li className="card" id={card[0].id}>
          <a className='card__trailer-link' target={'_blank'} href={`${card[0].trailerLink}`}>
            <img className="card__image" alt={`Постер фильма ${card[0].nameRU}`} src={`https://api.nomoreparties.co${card[0].image.url}`} onClick={handleClick}/>
          </a>
          <div className="card__image-caption">
            <h2 className="card__title">{card[0].nameRU}</h2>
            <p className='card__movie-duration'>{getTimeFromMins(card[0].duration)}</p>
          </div>
          <button type="button" aria-label="addToSavedIcon"
                  className='card__button_type_dislike' onClick={handleLikeClick}>
          </button>
        </li>
        <li className="card" id={card[0].id}>
          <a className='card__trailer-link' target={'_blank'} href={`${card[0].trailerLink}`}>
            <img className="card__image" alt={`Постер фильма ${card[0].nameRU}`} src={`https://api.nomoreparties.co${card[0].image.url}`} onClick={handleClick}/>
          </a>
          <div className="card__image-caption">
            <h2 className="card__title">{card[0].nameRU}</h2>
            <p className='card__movie-duration'>{getTimeFromMins(card[0].duration)}</p>
          </div>
          <button type="button" aria-label="addToSavedIcon"
                  className='card__button_type_dislike' onClick={handleLikeClick}>
          </button>
        </li>
      </>
  );
}

export default MoviesCard;
