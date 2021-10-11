import React, { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onSignOut, onEditProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  function handleInputName(e) {
    setInputName(e.target.value);
  }

  function handleInputEmail(e) {
    setInputEmail(e.target.value);
  }
  function handleSubmitEditProfile(e) {
    e.preventDefault();
    onEditProfile(inputEmail, inputName);
  }
  useEffect(() => {
    setInputName(currentUser.name);
    setInputEmail(currentUser.email);
  }, [currentUser]);
  return (
      <React.Fragment>
        <section className='profile'>
            <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
            <form className='profile__edit-profile-form' onSubmit={handleSubmitEditProfile}>
                <div className='profile__input-field'>
                <label htmlFor='editProfileName' className='profile__edit-profile-input-label'>Имя</label>
                <input id='editProfileName' value={inputName} className='profile__edit-profile-input' onChange={handleInputName}/>
                </div>
                <div className='profile__input-field'>
                    <label htmlFor='editProfileEmail' className='profile__edit-profile-input-label'>E-mail</label>
                    <input className='profile__edit-profile-input' value={inputEmail} placeholder={currentUser.email} onChange={handleInputEmail}/>
                </div>

                <button className='profile__edit-profile-button page__link-transparency'>Редактировать</button>
            </form>
            <button className='profile__logout-button page__link-transparency' onClick={onSignOut}>Выйти из аккаунта</button>
        </section>
      </React.Fragment>
  );
}

export default Profile;
