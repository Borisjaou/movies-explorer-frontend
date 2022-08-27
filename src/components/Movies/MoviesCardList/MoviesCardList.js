import React from 'react';
import './MoviesCardList.css';
import Movies from '../Movies/Movies';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  /* кнопка еще должна появляться после поиска фильмов. смотри скрин Блок Результатов */
  const [
    movies,
    filteredMovies,
    query,
    shortMovie,
  ] = Movies(props);

  return (
    <section className='card-list'>
      <div className='card-list__container'>
        {movies.map((item) => (
          <MoviesCard
            movieInfo={item}
            key={item.id}
          />
        ))}
      </div>
      <div className='movies-card__more'>
        <button className='movies-card__more-button' type='button'>Ещё</button>
      </div>
    </section>
  );
}
export default MoviesCardList;
