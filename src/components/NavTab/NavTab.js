import { HashLink } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
  return (
        <nav className='promo-menu'>
            <ul className='promo-menu__links'>
                <li className='promo-menu__list-item page__link-transparency'><HashLink to='#aboutProject' className='promo-menu__link'>О проекте</HashLink></li>
                <li className='promo-menu__list-item page__link-transparency'><HashLink to='#techs' className='promo-menu__link'>Технологии</HashLink></li>
                <li className='promo-menu__list-item page__link-transparency'><HashLink to='#aboutMe' className='promo-menu__link'>Студент</HashLink></li>
            </ul>

        </nav>
  );
}

export default NavTab;
