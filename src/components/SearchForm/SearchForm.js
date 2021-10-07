import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
        <form className='search-form'>
            <div className='search-form__upper-row-container'>
                <input className='search-form__input_type_text' placeholder='Фильмы' required={true}/>
                <button type='submit' className='search-form__button button-hover-transform'>Найти</button>
            </div>
            <FilterCheckbox/>
        </form>
  );
}

export default SearchForm;
