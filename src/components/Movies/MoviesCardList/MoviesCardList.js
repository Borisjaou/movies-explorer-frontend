import React from 'react';
import './MoviesCardList.css';

function MoviesCardList() {
  /* кнопка еще должна появляться после поиска фильмов. смотри скрин Блок Результатов */
  return (
    <section className='card-list'>
      <div className='card-list__container'>
      </div>
      <div className='movies-card__more'>
        <button className='movies-card__more-button' type='button'>Ещё</button>
      </div>
    </section>
  );
}
export default MoviesCardList;
