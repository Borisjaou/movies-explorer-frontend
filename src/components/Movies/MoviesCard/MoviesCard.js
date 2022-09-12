import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './MoviesCard.css';
import cross from '../../../images/icon-delete.svg';

function MoviesCard(props) {
  const [addClass, setAddClass] = React.useState('');
  const serverMovieCard = props.savedMovies.find((e) => e._id === props.movieInfo._id);
  const apiMovieCard = props.savedMovies.find((e) => e.movieId === props.movieInfo.id);

  function compareId() {
    if (props.movieInfo.id === apiMovieCard.movieId) {
      return apiMovieCard;
    }
    return console.log('end');
  }

  const isOwnCard = props.savedMovies.some(
    (i) => i.movieId === props.movieInfo.id || props.movieInfo.movieId,
  );

  function movieLikeButtonClassName() {
    if (isOwnCard) {
      setAddClass('movies-card__like_active');
    } else {
      setAddClass('movies-card__like');
    }
  }

  function convertTime(duration) {
    const minutes = duration;
    const hours = minutes / 60;
    const hourTime = Math.floor(hours);
    const minuteTime = Math.round((hours - hourTime) * 60);
    return `${`${hourTime}ч `}${`${minuteTime}м`}`;
  }

  function handleOpenTrailer() {
    window.open(props.movieInfo.trailerLink, '_blank');
  }

  function handleLike() {
    props.onLike(props.movieInfo);
  }

  function handleDeleteMovie() {
    props.onDelete(serverMovieCard || compareId());
  }

  function handleMovieCard() {
    if (isOwnCard) {
      handleDeleteMovie();
      setAddClass('movies-card__like');
    } else {
      handleLike();
      setAddClass('movies-card__like_active');
    }
  }

  React.useEffect(() => {
    movieLikeButtonClassName();
  }, []);

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

              <button
                className={addClass}
                type='button'
                onClick={handleMovieCard}
              />
            </div>
            <div className='movies-card__duration'>{convertTime(props.movieInfo.duration)}</div>
          </figure>
        </Route>
        <Route path='/saved-movies'>
          <figure className='movies-card'>
            <img className='movies-card__image'
              alt={props.movieInfo.nameRU}
              src={props.movieInfo.image}
              onClick={handleOpenTrailer}
            />
            <div className='movies-card__inscription'>
              <p className='movies-card__title'
                onClick={handleOpenTrailer}
              >{props.movieInfo.nameRU}</p>
              <button className='movies-card__delete'>
                <img
                  className='movies-card__cross'
                  src={cross}
                  alt='кнопка лайк'
                  type='button'
                  onClick={handleMovieCard}
                />
              </button>
            </div>
            <div className='movies-card__duration'>{convertTime(props.movieInfo.duration)}</div>
          </figure>
        </Route>
      </Switch>
    </section>

  );
}
export default MoviesCard;
