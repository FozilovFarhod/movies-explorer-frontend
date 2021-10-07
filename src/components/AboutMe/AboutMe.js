import './AboutMe.css';
import studentsPhoto from '../../images/students-photo.jpg';

function AboutMe() {
  return (
        <section className='about-me' id='aboutMe'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__info'>
                <div className='about-me__text-block'>
                <h3 className='about-me__name'>Виталий</h3>
                <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
                <p className='about-me__article-text'>Я родился и живу в Саратове, закончил факультет экономики СГУ.
                    У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
                    Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                    После того, как прошёл курс по веб-разработке,
                    начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <ul className='about-me__social-links'>
                    <li className='about-me__social-list-item page__link-transparency'><a className='about-me__social-link' href='https://facebook.com' target = {'_blank'}>Facebook</a></li>
                    <li className='about-me__social-list-item page__link-transparency'><a className='about-me__social-link' href='https://github.com' target = {'_blank'}>Github</a></li>
                </ul>
                </div>
                <img className='about-me__photo' src={studentsPhoto} alt='students photo'/>
            </div>
        </section>
  );
}

export default AboutMe;
