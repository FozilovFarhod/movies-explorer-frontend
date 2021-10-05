import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isOpen }) {
  return (
      <React.Fragment>
    <nav className={`navigation${isOpen ? '_visible' : '_hidden'}`}>
      <ul className='navigation__links'>
          <li className='navigation__list-item'><NavLink exact to='/' activeClassName='navigation__link_active' className='navigation__link page__link-transparency'>Главная</NavLink></li>
         <li className='navigation__list-item'><NavLink to='/movies' activeClassName='navigation__link_active' className='navigation__link page__link-transparency'>Фильмы</NavLink></li>
          <li className='navigation__list-item'><NavLink to='/saved-movies' activeClassName='navigation__link_active' className='navigation__link page__link-transparency'>Сохраненные фильмы</NavLink></li>
          <li className='navigation__list-item'><NavLink to='/profile' className='profile__account-button page__link-transparency'>Аккаунт</NavLink></li>
      </ul>
    </nav>
      </React.Fragment>
  );
}
export default Navigation;
