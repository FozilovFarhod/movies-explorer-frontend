import './SearchForm.css';
import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import validate from '../../utils/Validate';

function SearchForm({
  searchInputValue,
  shortFilmCheckboxStatus,
  handleChangeFilterCheckbox,
  handleSearchFormSubmit,
  handleSearchInput,
}) {
  const validation = validate();

  function handleInput(e) {
    handleSearchInput(e);
    validation.handleChange(e);
  }
  function handleSubmit(e) {
    e.preventDefault();
    validation.handleSubmit(e);
    if (validation.isValid) {
      handleSearchFormSubmit(e);
    }
  }
  return (
        <form className='search-form' onSubmit={handleSubmit} noValidate>
            <div className='search-form__upper-row-container'>
                <input className='search-form__input_type_text' name='search' placeholder='Фильмы' value={searchInputValue} required={true} onChange={handleInput}/>
                <button type='submit' className='search-form__button button-hover-transform'>Найти</button>
            </div>
            <span className='seacrh__input-error'>{validation.errors.search}</span>
            <FilterCheckbox
                handleChangeFilterCheckbox={ handleChangeFilterCheckbox }
                shortFilmCheckboxStatus={ shortFilmCheckboxStatus }
            />
        </form>
  );
}

export default SearchForm;
