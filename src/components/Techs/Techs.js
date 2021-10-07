import './Techs.css';

function Techs() {
  return (
        <section className='techs' id='techs'>
          <h2 className='techs__title'>Технологии</h2>
          <div className='techs__article'>
              <h3 className='techs__article-title'>7 технологий</h3>
              <p className='techs__article-text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          </div>
            <div className='techs__icons'>
                <ul className='techs__links'>
                    <li className='techs__list-item page__link-transparency'><a href='https://html.spec.whatwg.org/multipage/' target={'_blank'} className='techs__link'>HTML</a></li>
                    <li className='techs__list-item page__link-transparency'><a className='techs__link' href='https://www.w3.org/Style/CSS/' target={'_blank'}>CSS</a></li>
                    <li className='techs__list-item page__link-transparency'><a className='techs__link' href='https://www.ecma-international.org/' target={'_blank'}>JS</a></li>
                    <li className='techs__list-item page__link-transparency'><a className='techs__link' href='https://ru.reactjs.org/' target={'_blank'}>React</a></li>
                    <li className='techs__list-item page__link-transparency'><a className='techs__link' href='https://git-scm.com/' target={'_blank'}>Git</a></li>
                    <li className='techs__list-item page__link-transparency'><a className='techs__link' href='https://expressjs.com/ru/' target={'_blank'}>Express.js</a></li>
                    <li className='techs__list-item page__link-transparency'><a className='techs__link' href='https://expressjs.com/ru/' target={'_blank'}>mongoDB</a></li>
                </ul>
            </div>
        </section>
  );
}

export default Techs;
