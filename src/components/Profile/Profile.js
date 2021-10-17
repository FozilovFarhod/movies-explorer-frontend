import React, { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import validate from '../../utils/Validate';
import Header from '../Header/Header';

function Profile({ onSignOut, onEditProfile, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const validation = validate();

  function handleInputName(e) {
    setInputName(e.target.value);
    validation.handleChange(e);
  }

  function handleInputEmail(e) {
    setInputEmail(e.target.value);
    validation.handleChange(e);
  }
  function handleSubmitEditProfile(e) {
    e.preventDefault();
    onEditProfile(inputEmail, inputName);
  }
  useEffect(() => {
    if (currentUser.name && currentUser.email) {
      setInputName(currentUser.name);
      setInputEmail(currentUser.email);
    }
  }, [currentUser]);
  function disableSubmitButton() {
    if ((currentUser.name === inputName && currentUser.email === inputEmail)
    || !validation.isValid) {
      return true;
    }
    return false;
  }
  return (
      <React.Fragment>
        <Header
        isLoggedIn={isLoggedIn}
        />
        <section className='profile'>
            <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
            <form className='profile__edit-profile-form' onSubmit={handleSubmitEditProfile} noValidate>
                <div className='profile__input-field'>
                <label htmlFor='editProfileName' className='profile__edit-profile-input-label'>Имя</label>
                <input
                name='name'
                id='editProfileName'
                value={inputName}
                className='profile__edit-profile-input'
                pattern='^[а-яА-ЯёЁa-zA-Z- ]{2,30}$'
                onChange={handleInputName}
                onFocus={validation.handleChange}
                onBlur={validation.handleBlur}
                required
                />
                {validation.touchedFields.name && <span className='profile__input-error'>{validation.errors.name}</span>}
                </div>
                <div className='profile__input-field'>
                    <label htmlFor='editProfileEmail' className='profile__edit-profile-input-label'>E-mail</label>
                    <input
                    name='email'
                    className='profile__edit-profile-input'
                    value={inputEmail}
                    pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'
                    onChange={handleInputEmail}
                    required
                    onFocus={validation.handleChange}
                    onBlur={validation.handleBlur}
                    />
                    {validation.touchedFields.email && <span className='profile__input-error'>{validation.errors.email}</span>}
                </div>

                <button className='profile__edit-profile-button page__link-transparency' disabled={disableSubmitButton()}>Редактировать</button>
            </form>
            <button className='profile__logout-button page__link-transparency' onClick={onSignOut}>Выйти из аккаунта</button>
        </section>
      </React.Fragment>
  );
}

export default Profile;
