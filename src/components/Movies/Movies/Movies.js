import React from 'react';

function Movies(props) {
  const foundMovieList = JSON.parse(localStorage.getItem('foundMovie'));
  const getStorageMovies = foundMovieList === null ? [] : foundMovieList;
  const getAllMovies = JSON.parse(localStorage.getItem('allMovies'));

  const [query, setQuery] = React.useState('');
  /* const [movies, setMovies] = React.useState([]); */
  const [filteredMovies, setFilteredMovies] = React.useState(getStorageMovies);

  console.log(localStorage);

  function updateShort() {
    localStorage.setItem('short', JSON.stringify(props.short));
  }
  function updateQuery() {
    setQuery(props.search);
    localStorage.setItem('search', JSON.stringify(props.search));
    if (props.search.length && window.location.pathname === '/movies') {
      const data = /* movies */ getAllMovies
        .filter((item) => item.nameRU.toLowerCase().indexOf(props.search
          .toLowerCase()) >= 0
          && (!props.short || item.duration <= 40));
      setFilteredMovies(data);
      localStorage.setItem('foundMovie', JSON.stringify(data));
    }
    if (window.location.pathname === '/saved-movies') {
      const data = props.savedMovies
        .filter((item) => item.nameRU.toLowerCase()
          .indexOf(props.search.toLowerCase()) >= 0
          && (!props.short || item.duration <= 40));
      setFilteredMovies(data);
    }
  }

  /*   function allMovies() {
      setMovies(props.movies);
      localStorage.setItem('movies', JSON.stringify(props.movies));
    } */

  React.useEffect(() => {
    updateShort();
    updateQuery();
    /* allMovies(); */
  }, [props]);

  return [
    filteredMovies,
    query,
  ];
}
export default Movies;
