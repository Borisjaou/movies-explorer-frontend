import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import searchButton from '../../../images/searchButton.svg';
import searchIcon from '../../../images/searchIcon.svg';

function SearchForm(props) {
  const savedRequest = JSON.parse(localStorage.getItem('search'));
  const getStorageSearch = savedRequest === null ? '' : savedRequest;

  console.log(getStorageSearch);
  console.log(savedRequest);

  const savedCheck = JSON.parse(localStorage.getItem('short'));
  const getStorageCheck = savedCheck === null ? false : savedCheck;

  const [searchError, setSearchError] = useState('');
  const [searchRequest, setSearchRequest] = useState(getStorageSearch);
  const [isValid, setIsValid] = useState(false);
  const [checked, setChecked] = useState(getStorageCheck);
  console.log(checked);
  const searchRegExp = /^[?':!,.а-яА-ЯёЁa-zA-Z0-9\s]+$/;
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

  function handleSearchShort(e) {
    /* localStorage.clear(); */
    setChecked(e.target.checked);
  }

  useEffect(() => {
    props.onChecked({
      checked,
    });
  }, [checked]);

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
        <input
          checked={checked}
          onChange={handleSearchShort}
          type='checkbox' className='checkbox__input' />
        Короткометражки
        <span className='checkbox__slider' />
      </label>
    </section>
  );
}
export default SearchForm;
