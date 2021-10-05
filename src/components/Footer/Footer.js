import { useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();
  return (
        <footer className={ `footer ${location.pathname === '/' ? 'footer_type_grey' : ''}`}>
          <h6 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h6>
          <div className='footer__caption-container'>
            <p className='footer__copyright'>&copy; 2021</p>
              <nav className='footer__nav-bar'>
                  <ul className='footer__nav-bar-links'>
                      <li className='footer__nav-bar-item'><a className='footer__nav-bar-link page__link-transparency' href='https://practicum.yandex.ru' target={'_blank'}>Яндекс.Практикум</a></li>
                      <li className='footer__nav-bar-item'><a className='footer__nav-bar-link page__link-transparency' href='https://github.com' target={'_blank'}>Github</a></li>
                      <li className='footer__nav-bar-item'><a className='footer__nav-bar-link page__link-transparency' href='https://facebook.com' target={'_blank'}>Facebook</a></li>
                  </ul>
              </nav>
          </div>
        </footer>
  );
}

export default Footer;
