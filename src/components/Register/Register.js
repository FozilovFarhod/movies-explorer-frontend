import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';

function Register({ onRegister }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputName, setInputName] = useState('');

  function handleEmailInputChange(evt) {
    setInputEmail(evt.target.value);
  }
  function handlePasswordInputChange(evt) {
    setInputPassword(evt.target.value);
  }

  function handleNameInputChange(evt) {
    setInputName(evt.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onRegister(inputEmail, inputPassword, inputName);
  }
  console.log(inputEmail);
  console.log(inputPassword);
  console.log(inputName);
  return (
        <section className='register'>
            <Link className='logo__link' to='/'><img className='register__logo' src={logo} alt='logo'/></Link>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form' onSubmit={handleSubmit}>
                <div className='register__input-field'>
                    <label htmlFor='registerName'
                           className='register__input-label'>
                        Имя</label>
                    <input id='registerName'
                           className='register__input register__input_type_name' placeholder='
            Виталий' onChange={handleNameInputChange}/>
                    <span className='register__input-error'>Error</span>
                </div>
                <div className='register__input-field'>
                    <label htmlFor='registerEmail'
                           className='register__input-label'>
                        E-mail</label>
                    <input id='registerEmail' type='e-mail' className='register__input register__input_type_email'
                           placeholder='
            pochta@yandex.ru' onChange={handleEmailInputChange}/>
                    <span className='register__input-error'>Error</span>
                </div>
                <div className='register__input-field'>
                    <label htmlFor='registerPassword'
                           className='register__input-label'>
                        Пароль</label>
                    <input id='registerEmail' type='password'
                           className='register__input register__input_type_error register__input_type_password' placeholder='
            Password' onChange={handlePasswordInputChange}/>
                    <span className='register__input-error'>Error</span>
                </div>
                 <button className='register__register-button button-hover-transform'>Зарегистрироваться</button>
            </form>
            <div className='register__register-link-field'><span className='register__login-link-label'>Уже зарегистрированы?</span><Link to='/signin' className='register__register-link page__link-transparency'>Войти</Link></div>
        </section>
  );
}

export default Register;
