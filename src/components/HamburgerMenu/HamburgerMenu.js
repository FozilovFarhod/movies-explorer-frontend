import './HamburgerMenu.css';

function HamburgerMenu({ openHandler, isOpen }) {
  return (
        <div className={`hamburger-icon hamburger-icon${isOpen ? '_opened' : ''}`} onClick={openHandler}>
            <div className={`hamburger-icon__line hamburger-icon__line${isOpen ? '_opened' : ''}`}></div>
            <div className={`hamburger-icon__line hamburger-icon__line${isOpen ? '_opened' : ''}`}></div>
            <div className={`hamburger-icon__line hamburger-icon__line${isOpen ? '_opened' : ''}`}></div>
        </div>
  );
}

export default HamburgerMenu;
