import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import validate from '../../utils/Validate';

function Register({ onRegister }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputName, setInputName] = useState('');
  const validation = validate();

  function handleEmailInputChange(evt) {
    setInputEmail(evt.target.value);
    validation.handleChange(evt);
  }

  function handlePasswordInputChange(evt) {
    setInputPassword(evt.target.value);
    validation.handleChange(evt);
  }

  function handleNameInputChange(evt) {
    setInputName(evt.target.value);
    validation.handleChange(evt);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onRegister(inputEmail, inputPassword, inputName);
  }
  return (
        <section className='register'>
            <Link className='logo__link' to='/'><img className='register__logo' src={logo} alt='logo'/></Link>
            <h1 className='register__title'>Добро пожаловать!</h1>
            <form className='register__form' onSubmit={handleSubmit} noValidate>
                <div className='register__input-field'>
                    <label
                    htmlFor='registerName'
                    className='register__input-label'>Имя
                    </label>
                    <input
                    type='String'
                    id='registerName'
                    className='register__input register__input_type_name'
                    placeholder='Виталий'
                    onFocus={validation.handleChange}
                    onChange={handleNameInputChange}
                    pattern='^[а-яА-ЯёЁa-zA-Z- ]{2,30}$'
                    minLength='3'
                    name='name'
                    onBlur={validation.handleBlur}
                    required
                    />
                    {validation.touchedFields.name && <span className='register__input-error'>{validation.errors.name}</span>}
                </div>
                <div className='register__input-field'>
                    <label htmlFor='registerEmail'
                           className='register__input-label'>
                        E-mail</label>
                    <input
                    id='registerEmail'
                    className='register__input register__input_type_email'
                    placeholder='pochta@yandex.ru'
                    onChange={handleEmailInputChange}
                    name='email'
                    pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'
                    title='Это сообщение об ошибке проверки email'
                    onFocus={validation.handleChange}
                    onBlur={validation.handleBlur}
                    required
                    />
                    {validation.touchedFields.email && <span className='register__input-error'>{validation.errors.email}</span>}
                </div>
                <div className='register__input-field'>
                    <label htmlFor='registerPassword'
                           className='register__input-label'>
                        Пароль</label>
                    <input
                    id='registerPassword'
                    type='password'
                    className='register__input register__input_type_password'
                    placeholder='Password'
                    onFocus={validation.handleChange}
                    onChange={handlePasswordInputChange}
                    name='password'
                    onBlur={validation.handleBlur}
                    required
                    />
                    {validation.touchedFields.password && <span className='register__input-error'>{validation.errors.password}</span>}
                </div>
                 <button className='register__register-button button-hover-transform' disabled={!validation.isValid}>Зарегистрироваться</button>
            </form>
            <div className='register__register-link-field'><span className='register__login-link-label'>Уже зарегистрированы?</span><Link to='/signin' className='register__register-link page__link-transparency'>Войти</Link></div>
        </section>
  );
}

export default Register;
