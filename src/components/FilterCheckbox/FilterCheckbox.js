import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [shortFilmCheckboxStatus, setShortFilmCheckboxStatus] = useState(false);
  function handleChangeFilterCheckbox(e) {
    setShortFilmCheckboxStatus(e.target.checked);
  }
  const checkboxClassName = `search-form__input_type_visible-checkbox ${shortFilmCheckboxStatus && 'search-form__input_type_visible-checkbox_unchecked'}`;
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
