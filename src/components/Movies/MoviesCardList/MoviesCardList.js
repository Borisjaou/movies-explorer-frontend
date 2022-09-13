import React from 'react';
import './MoviesCardList.css';
import Movies from '../Movies/Movies';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  const [
    filteredMovies,
    query,
  ] = Movies(props);

  const [showMore, setShowMore] = React.useState(0);
  const [showMoreButton, setShowMoreButton] = React.useState('movies-card__more_hidden');
  const [showMessage, setShowMessage] = React.useState('card-list__message_hidden');

  React.useEffect(() => {
    if (filteredMovies.length === 0 && query.length !== 0) {
      setShowMessage('card-list__message');
    } else {
      setShowMessage('card-list__message_hidden');
    }
    setShowMore(0);
  }, [filteredMovies]);

  function getMovies() {
    if (window.innerWidth >= 1280) {
      return filteredMovies
        .slice(0, 12 + showMore);
    }
    if (window.innerWidth > 480 && window.innerWidth < 1280) {
      return filteredMovies
        .slice(0, 8 + showMore);
    }
    if (window.innerWidth >= 320 && window.innerWidth <= 480) {
      return filteredMovies
        .slice(0, 5 + showMore);
    }
    return console.log('Что-то пошло не так');
  }

  function handleClickShowMore() {
    if (window.innerWidth >= 1280) {
      return setShowMore(showMore + 3);
    }
    if (window.innerWidth > 480 && window.innerWidth < 1280) {
      return setShowMore(showMore + 2);
    }
    if (window.innerWidth >= 320 && window.innerWidth <= 480) {
      return setShowMore(showMore + 1);
    }
    return console.log('Что-то пошло не так');
  }

  React.useEffect(() => {
    if (getMovies().length < filteredMovies.length && getMovies().length !== 0) {
      setShowMoreButton('movies-card__more');
    } else {
      setShowMoreButton('movies-card__more_hidden');
    }
  }, [handleClickShowMore]);

  return (
    <section className='card-list'>
      <p className={showMessage}>Ничего не найдено</p>
      <div className='card-list__container'>
        {getMovies()
          .map((item) => (
            < MoviesCard
              onLike={props.onLike}
              onDelete={props.onDelete}
              movieInfo={item}
              savedMovies={props.savedMovies}
              key={item.movieId || item.id}
            />
          ))}
      </div>
      <div className={showMoreButton}>
        <button
          className='movies-card__more-button'
          onClick={handleClickShowMore}
          type='button'>Ещё</button>
      </div>
    </section>
  );
}
export default MoviesCardList;
