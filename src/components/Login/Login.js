import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import validate from '../../utils/Validate';

function Login({ onLogin }) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const validation = validate();

  function handleEmailInputChange(evt) {
    setInputEmail(evt.target.value);
    validation.handleChange(evt);
  }
  function handlePasswordInputChange(evt) {
    setInputPassword(evt.target.value);
    validation.handleChange(evt);
  }
  function handleLoginSubmit(e) {
    e.preventDefault();
    onLogin(inputEmail, inputPassword);
  }
  return (
      <section className='login'>
          <Link className='logo__link' to='/'><img className='login__logo' src={logo} alt='logo'/></Link>
          <h1 className='login__title'>Рады видеть!</h1>
          <form className='login__form' onSubmit={handleLoginSubmit}>
              <div className='login__input-field'>
                  <label htmlFor='loginEmail'
                         className='login__input-label'>
                      E-mail</label>
                  <input
                  id='loginEmail'
                  type='email'
                  name='email'
                  className='login__input login__input_type_email'
                  placeholder='pochta@yandex.ru'
                  pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'
                  required
                  onFocus={validation.handleChange}
                  onChange={handleEmailInputChange}
                  onBlur={validation.handleBlur}
                  />
                 {validation.touchedFields.email && <span className='login__input-error'>{validation.errors.email}</span>}
              </div>
              <div className='login__input-field'>
                  <label htmlFor='loginPassword'
                         className='login__input-label'>
                      Пароль</label>
                  <input
                  id='loginEmail'
                  type='password'
                  name='password'
                  className='login__input login__input_type_password'
                  placeholder='Password'
                  required
                  onFocus={validation.handleChange}
                  onBlur={validation.handleBlur}
                  onChange={handlePasswordInputChange}/>
                  {validation.touchedFields.password && <span className='login__input-error'>{validation.errors.password}</span>}
              </div>
              <button className='login__button button-hover-transform' disabled={!validation.isValid}>Войти</button>
          </form>
          <div className='login__link-field'><span className='login__link-label'>Ещё не зарегистрированы?</span><Link to='/signup' className='login__login-link page__link-transparency'>Регистрация</Link></div>
      </section>
  );
}

export default Login;
