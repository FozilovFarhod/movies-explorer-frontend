import React from 'react';
import Header from '../Header/Header';

function Profile() {
  return (
      <React.Fragment>
      <Header/>
        <section className='profile'>
            <h1 className='profile__title'>Привет, Виталий!</h1>
            <form className='profile__edit-profile-form'>
                <div className='profile__input-field'>
                <label htmlFor='editProfileName' className='profile__edit-profile-input-label'>Имя</label>
                <input id='editProfileName' className='profile__edit-profile-input' placeholder='Виталий'/>
                </div>
                <div className='profile__input-field'>
                    <label htmlFor='editProfileEmail' className='profile__edit-profile-input-label'>E-mail</label>
                    <input className='profile__edit-profile-input' placeholder='pochta@yandex.ru'/>
                </div>

                <button className='profile__edit-profile-button page__link-transparency'>Редактировать</button>
            </form>
            <button className='profile__logout-button page__link-transparency'>Выйти из аккаунта</button>
        </section>
      </React.Fragment>
  );
}

export default Profile;
