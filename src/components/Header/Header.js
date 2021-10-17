import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenHamburger() {
    setIsOpen(!isOpen);
  }
  return (
      <header className='header'>
        <Link className='logo__link' to='/'><img className= 'logo page__link-transparency' src={logo} alt='logo'/></Link>
          {isLoggedIn
            ? <React.Fragment>
              <HamburgerMenu
                  openHandler = {handleOpenHamburger}
                  isOpen = {isOpen}
              />
              <Navigation
                  openHandler = {handleOpenHamburger}
                  isOpen = {isOpen}
              /></React.Fragment>
            : <nav className = 'header__nav-bar'>
                  <Link to='signup' className = 'header__sign-up-button page__link-transparency'>Регистрация</Link>
                  <Link to='signin' className = 'header__login-button page__link-transparency'>Войти</Link>
              </nav>
          }
      </header>
  );
}
export default Header;
