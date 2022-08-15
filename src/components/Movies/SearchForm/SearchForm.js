import React, { useState } from 'react';
import './SearchForm.css';
import searchButton from '../../../images/searchButton.svg';
import searchIcon from '../../../images/searchIcon.svg';

function SearchForm(props) {
  const [searchError, setSearchError] = useState('');
  const [searchRequest, setSearchRequest] = useState('');
  const [isValid, setIsValid] = useState(false);

  const searchRegExp = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;
  function handleInputSearch(e) {
    setSearchRequest(e.target.value);
    if (!new RegExp(searchRegExp).test(e.target.value)) {
      setIsValid(false);
      setSearchError('Нужно ввести ключевое слово');
    } else {
      setIsValid(true);
      setSearchError('');
    }
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    props.onSearch({
      searchRequest,
    });
  }

  return (
    <section className='search'>
      <form onSubmit={handleSearchSubmit} className='search__container'>
        <img className='search__icon' src={searchIcon} alt='Иконка поиска' />
        <input
          onChange={handleInputSearch}
          className='search__input'
          placeholder='Фильм'
          type='search'
          value={searchRequest}
          required></input>
        <span className='search__input-error'>{searchError}</span>
        <button className='search__button' disabled={!isValid} type='submit'>
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
