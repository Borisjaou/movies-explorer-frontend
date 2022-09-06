import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './MoviesCard.css';
import cross from '../../../images/icon-delete.svg';
import dislike from '../../../images/smallUnlikedButton.svg';

function MoviesCard(props) {
  function convertTime() {
    const minutes = props.movieInfo.duration;
    const hours = minutes / 60;
    const hourTime = Math.floor(hours);
    const minuteTime = Math.round((hours - hourTime) * 60);
    return `${`${hourTime}ч `}${`${minuteTime}м`}`;
  }

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
            <div className='movies-card__duration'>{convertTime()}</div>
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

function formatSeconds(value) {
  let secondTime = parseInt(value); // секунд
  let minuteTime = 0; // минута
  let hourTime = 0; // час
  if (secondTime > 60) { // Если количество секунд больше 60, преобразовать количество секунд в целое число
    // Получить минуты, разделить на 60, чтобы получить целые числа, получить целые минуты
    minuteTime = parseInt(secondTime / 60);
    // Получить количество секунд, взять количество секунд, чтобы получить целое число секунд
    secondTime = parseInt(secondTime % 60);
    // Если минуты больше 60, конвертируем минуты в часы
    if (minuteTime > 60) {
      // Получаем часы, получаем минуты, разделенные на 60, получаем целые часы
      hourTime = parseInt(minuteTime / 60);
      // Получаем очки в часах и часах, получаем минуты в минутах, поделенные на 60 очков в часах
      minuteTime = parseInt(minuteTime % 60);
    }
  }
  let result = `${parseInt(secondTime)}second`;

  if (minuteTime > 0) {
    результат = `${parseInt(minuteTime)}минута${результат}`;
  }
  if (hourTime > 0) {
    result = `${parseInt(hourTime)}hour${result}`;
  }
  return result;
}
