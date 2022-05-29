import React from 'react';
import './SearchForm.css';
import searchButton from '../../../images/searchButton.svg'
import searchIcon from '../../../images/searchIcon.svg'

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__container'>
        <img className='search__icon' src={searchIcon} alt='Иконка поиска' />
        <p>Фильм</p>
        <button className='search__button'>
          <img src={searchButton} alt='Кнопка поиска фильма' />
        </button>
      </div>
    </section>
  );
}
export default SearchForm;
