import React from 'react';
import { Switch, Route } from 'react-router-dom';
import test from '../../../images/test.jpg'
import cross from '../../../images/icon-delete.svg'
import dislike from '../../../images/smallUnlikedButton.svg';


function MoviesCard() {
  return (
    <section>
      <Switch>
        <Route path='/movies'>
          <figure className='movies-card'>
            <img className='movies-card__image' alt='вставить сюда пропс с названием' src={test} />
            <div className='movies-card__inscription'>
              <p className='movies-card__title'>Название фильма будет тут</p>
              <button className='movies-card__like'><img className='movies-card__heart' src={dislike} alt='кнопка лайк'></img></button>
            </div>
            <div className='movies-card__duration'>movie duration</div>
          </figure>
        </Route>
        <Route path='/saved-movies'>
          <figure className='movies-card'>
            <img className='movies-card__image' alt='вставить сюда пропс с названием' src={test} />
            <div className='movies-card__inscription'>
              <p className='movies-card__title'>Название фильма будет тут</p>
              <button className='movies-card__delete'><img className='movies-card__cross' src={cross} alt='кнопка лайк'></img></button>
            </div>
            <div className='movies-card__duration'>movie duration</div>
          </figure>
        </Route>
      </Switch>
    </section>

  )
}
export default MoviesCard;