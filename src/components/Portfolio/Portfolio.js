import './Portfolio.css';

function Portfolio() {
  return (
        <div className='portfolio'>
            <h3 className='portfolio__title'>Портфолио</h3>
            <ul className='portfolio__links'>
                <li className='portfolio__item'><span className='portfolio__item-text'>Статичный сайт</span><a className='portfolio__link page__link-transparency' href='https://github.com' target={'_blank'}>↗</a></li>
                <li className='portfolio__item'><span className='portfolio__item-text'>Адаптивный сайт</span><a className='portfolio__link page__link-transparency' href='https://github.com' target={'_blank'}>↗</a></li>
                <li className='portfolio__item'><span className='portfolio__item-text'>Одностраничное приложение</span><a className='portfolio__link page__link-transparency' href='https://github.com' target={'_blank'}>↗</a></li>
            </ul>
        </div>
  );
}

export default Portfolio;
