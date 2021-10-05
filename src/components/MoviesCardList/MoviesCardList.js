import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
        <section className='movies'>
            <ul className='movies__cards'>
                <MoviesCard/>
            </ul>
            <button className='movies__more-button page__link-transparency'>Ещё</button>
        </section>
  );
}

export default MoviesCardList;
