import React from 'react';
import test from '../../../images/test.jpg'

function MoviesCard() {
  return (
    <figure className='movies-card'>
      <img className='movies-card__image' alt='вставить сюда пропс с названием' src={test} />
      <div className='movies-card__inscription'>
        <p className='movies-card__title'>Название фильма будет тут</p>
        <button className='movies-card__like'><img className='movies-card__heart' src={dislike} alt='кнопка лайк'></img></button>
      </div>
      <div className='movies-card__duration'>movie duration</div>
    </figure>

  )
}
export default MoviesCard;