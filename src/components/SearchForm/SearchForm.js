import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  shortFilmCheckboxStatus,
  handleChangeFilterCheckbox,
  handleSearchFormSubmit,
  handleSearchInput,
}) {
  return (
        <form className='search-form' onSubmit={handleSearchFormSubmit}>
            <div className='search-form__upper-row-container'>
                <input className='search-form__input_type_text' placeholder='Фильмы' required={true} onChange={handleSearchInput}/>
                <button type='submit' className='search-form__button button-hover-transform'>Найти</button>
            </div>
            <FilterCheckbox
                handleChangeFilterCheckbox={ handleChangeFilterCheckbox }
                shortFilmCheckboxStatus={ shortFilmCheckboxStatus }
            />
        </form>
  );
}

export default SearchForm;
