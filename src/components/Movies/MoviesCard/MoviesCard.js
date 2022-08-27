import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './MoviesCard.css';
import cross from '../../../images/icon-delete.svg';
import dislike from '../../../images/smallUnlikedButton.svg';

function MoviesCard(props) {
  return (
    <section>
      <Switch>
        <Route path='/movies'>
          <figure className='movies-card'>
            <img className='movies-card__image' alt={props.movieInfo.nameRU} src={`${'https://api.nomoreparties.co'}${props.movieInfo.image.url}`} />
            <div className='movies-card__inscription'>
              <p className='movies-card__title'>{props.movieInfo.nameRU}</p>
              <button className='movies-card__like' type='button'><img className='movies-card__heart' src={dislike} alt='кнопка лайк'></img></button>
            </div>
            <div className='movies-card__duration'>{props.movieInfo.duration}{'min'}</div>
          </figure>
        </Route>
        <Route path='/saved-movies'>
          <figure className='movies-card'>
            <img className='movies-card__image' alt='Text here' src={`${'https://images.unsplash.com/photo-1661493817356-106d0cb05bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60'}`} />
            <div className='movies-card__inscription'>
              <p className='movies-card__title'>Название фильма будет тут</p>
              <button className='movies-card__delete'><img className='movies-card__cross' src={cross} alt='кнопка лайк' type='button'></img></button>
            </div>
            <div className='movies-card__duration'>movie duration</div>
          </figure>
        </Route>
      </Switch>
    </section>

  );
}
export default MoviesCard;
