import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenHamburger() {
    setIsOpen(!isOpen);
  }
  return (
      <header className='header'>
        <Link className='logo__link' to='/'><img className= 'logo page__link-transparency' src={logo} alt='logo'/></Link>
        <Route exact path ='/'>
           <nav className = 'header__nav-bar'>
             <Link to='signup' className = 'header__sign-up-button page__link-transparency'>Регистрация</Link>
             <Link to='signin' className = 'header__login-button page__link-transparency'>Войти</Link>
           </nav>
        </Route>
        <Route path={ ['/movies', '/saved-movies', '/profile']}>
          <HamburgerMenu
              openHandler = {handleOpenHamburger}
              isOpen = {isOpen}
          />
          <Navigation
              openHandler = {handleOpenHamburger}
              isOpen = {isOpen}
          />
        </Route>
      </header>
  );
}
export default Header;
