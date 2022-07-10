import React from 'react';
import './SearchForm.css';
import searchButton from '../../../images/searchButton.svg';
import searchIcon from '../../../images/searchIcon.svg';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__container'>
        <img className='search__icon' src={searchIcon} alt='Иконка поиска' />
        <input className='search__input' placeholder='Фильм' type='search'></input>

        <button className='search__button' type='submit'>
          <img src={searchButton} alt='Кнопка поиска фильма' />
        </button>
      </form>
      <label className='checkbox checkbox__option'>
        <input type='checkbox' className='checkbox__input' />
        Короткометражки
        <span className='checkbox__slider' />
      </label>
    </section>
  );
}
export default SearchForm;
