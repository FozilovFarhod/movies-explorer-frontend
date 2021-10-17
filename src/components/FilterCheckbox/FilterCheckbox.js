import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ shortFilmCheckboxStatus, handleChangeFilterCheckbox }) {
  const checkboxClassName = `search-form__input_type_visible-checkbox ${shortFilmCheckboxStatus ? '' : 'search-form__input_type_visible-checkbox_unchecked'}`;
  return (
        <label className='search-form__checkbox'>
            <input type='checkbox' className='search-form__input_type_invisible-checkbox' id='filter-film-filter' onChange={handleChangeFilterCheckbox}></input>
            <span className={checkboxClassName}>
                <span className='search-form__input_type_visible-checkbox-toggle'></span>
            </span>
            <span className='search-form__input_type_checkbox-label'>Короткометражки</span>
        </label>
  );
}

export default FilterCheckbox;
