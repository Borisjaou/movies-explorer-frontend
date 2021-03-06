import React from 'react';
import './MoviesCardList.css';
/* import like from '../../../images/smallLikedButton.svg'; */
/* delete after extraction movies-card  Delete all cards after layout */
import test from '../../../images/test.jpg';
import test2 from '../../../images/test2.png';
import '../MoviesCard/MoviesCard.css';
import cross from '../../../images/icon-delete.svg';
import dislike from '../../../images/smallUnlikedButton.svg';

function MoviesCardList() {
  return (
    <section className='card-list'>
      <div className='card-list__container'>
        <figure className='movies-card'>
          <img className='movies-card__image' alt='вставить сюда пропс с названием' src={test} />
          <div className='movies-card__inscription'>
            <p className='movies-card__title'>Название фильма будет тут</p>
            <button className='movies-card__delete' type='button'><img className='movies-card__cross' src={cross} alt='кнопка лайк'></img></button>
          </div>
          <div className='movies-card__duration'>movie duration</div>
        </figure>

        <figure className='movies-card'>
          <img className='movies-card__image' alt='вставить сюда пропс с названием' src={test} />
          <div className='movies-card__inscription'>
            <p className='movies-card__title'>Название фильма будет тут</p>
            <button className='movies-card__like' type='button'><img className='movies-card__heart' src={dislike} alt='кнопка лайк'></img></button>
          </div>
          <div className='movies-card__duration'>movie duration</div>
        </figure>
        <figure className='movies-card'>
          <img className='movies-card__image' alt='вставить сюда пропс с названием' src={test2} />
          <div className='movies-card__inscription'>
            <p className='movies-card__title'>Название фильма будет тут</p>
            <button className='movies-card__like' type='button'><img className='movies-card__heart' src={dislike} alt='кнопка лайк'></img></button>
          </div>
          <div className='movies-card__duration'>movie duration</div>
        </figure>
        <figure className='movies-card'>
          <img className='movies-card__image' alt='вставить сюда пропс с названием' src={test2} />
          <div className='movies-card__inscription'>
            <p className='movies-card__title'>Название фильма будет тут</p>
            <button className='movies-card__like' type='button'><img className='movies-card__heart' src={dislike} alt='кнопка лайк'></img></button>
          </div>
          <div className='movies-card__duration'>movie duration</div>
        </figure>
      </div>
      <div className='movies-card__more'>
        <button className='movies-card__more-button' type='button'>Ещё</button>
      </div>
    </section>
  );
}
export default MoviesCardList;
