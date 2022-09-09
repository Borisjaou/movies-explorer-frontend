import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './MoviesCard.css';
import cross from '../../../images/icon-delete.svg';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { functions } from 'lodash';

function MoviesCard(props) {
  console.log(props);
  const isSaved = props.savedMovies;
  const currentUser = React.useContext(CurrentUserContext);
/*   const isOwn = props.cardInfo.owner === currentUser._id;
 */  const movieLikeButtonClassName = `movies-card__like ${isSaved ? 'movies-card__like_active' : 'movies-card__like'}`;

  const currentPath = location.pathname;

  function convertTime() {
    const minutes = props.movieInfo.duration;
    const hours = minutes / 60;
    const hourTime = Math.floor(hours);
    const minuteTime = Math.round((hours - hourTime) * 60);
    return `${`${hourTime}ч `}${`${minuteTime}м`}`;
  }

  function handleOpenTrailer() {
    window.open(props.movieInfo.trailerLink, '_blank');
  }

  function handleLike() {
    console.log('kek')
  }
  const showIcon = (window.location.pathname === '/saved-movies') ? (<button
    onClick={handleLike}
    className='movies-card__delete'>
    <img
      /* className='movies-card__cross' */
      src={cross}
      alt='кнопка лайк'
      type='button'>
    </img>
  </button>) : <button
    onClick={handleLike}
    className={movieLikeButtonClassName}
    /* className='movies-card__like' */
    type='button' />;

  return (
    <section>
      <Switch>
        <Route path='/movies'>
          <figure className='movies-card'>
            <img className='movies-card__image'
              alt={props.movieInfo.nameRU}
              src={`${'https://api.nomoreparties.co'}${props.movieInfo.image.url}`}
              onClick={handleOpenTrailer}
            />
            <div className='movies-card__inscription'>
              <p className='movies-card__title'
                onClick={handleOpenTrailer}
              >{props.movieInfo.nameRU}</p>
              {showIcon}
              {/* <button className='movies-card__like' type='button' /> */}
            </div>
            <div className='movies-card__duration'>{convertTime()}</div>
          </figure>
        </Route>
        {/*         <Route path='/saved-movies'>
          <figure className='movies-card'>
            <img className='movies-card__image'
              alt={props.movieInfo.nameRU}
              src={`${'https://api.nomoreparties.co'}${props.movieInfo.image.url}`}
              onClick={handleOpenTrailer}
            />
            <div className='movies-card__inscription'>
              <p className='movies-card__title'
                onClick={handleOpenTrailer}
              >{props.movieInfo.nameRU}</p>
              <button className='movies-card__delete'><img className='movies-card__cross' src={cross} alt='кнопка лайк' type='button'></img></button>
            </div>
            <div className='movies-card__duration'>{convertTime()}</div>
          </figure>
        </Route>
 */}      </Switch>
    </section>

  );
}
export default MoviesCard;

