import { useHistory } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  const history = useHistory();
  return (
        <section className='not-found'>
            <p className='not-found__text-content'>404</p>
            <h1 className='not-found__title'>Страница не найдена</h1>
            <a href='#' className='not-found__back-link' onClick={() => {
              history.goBack();
            }}>Назад</a>
        </section>
  );
}

export default NotFound;
