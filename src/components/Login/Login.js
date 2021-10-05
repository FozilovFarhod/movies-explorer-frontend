import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';

function Login() {
  return (
      <section className='login'>
          <Link className='logo__link' to='/'><img className='login__logo' src={logo} alt='logo'/></Link>
          <h1 className='login__title'>Рады видеть!</h1>
          <form className='login__form'>
              <div className='login__input-field'>
                  <label htmlFor='loginEmail'
                         className='login__input-label'>
                      E-mail</label>
                  <input id='loginEmail' type='e-mail' className='login__input login__input_type_email'
                         placeholder='
            pochta@yandex.ru' required={true}/>
                  <span className='login__input-error'>Error</span>
              </div>
              <div className='login__input-field'>
                  <label htmlFor='loginPassword'
                         className='login__input-label'>
                      Пароль</label>
                  <input id='loginEmail' type='password'
                         className='login__input login__input_type_password' placeholder='
            Password'/>
                  <span className='login__input-error'>Error</span>
              </div>
              <button className='login__button button-hover-transform' disabled={false}>Войти</button>
          </form>
          <div className='login__link-field'><span className='login__link-label'>Ещё не зарегистрированы?</span><Link to='/signup' className='login__login-link page__link-transparency'>Регистрация</Link></div>
      </section>
  );
}

export default Login;
