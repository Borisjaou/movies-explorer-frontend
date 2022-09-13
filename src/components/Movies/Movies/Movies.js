import React from 'react';

function Movies(props) {
  /* console.log(localStorage); */
  const getStorageMovies = JSON.parse(localStorage.getItem('foundMovie'));
  const foundMovieList = getStorageMovies === null ? [] : getStorageMovies;

  const getStorageMoviesList = JSON.parse(localStorage.getItem('allMovies'));
  const showAllMovies = getStorageMoviesList === null ? [] : getStorageMoviesList;

  const [query, setQuery] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState(foundMovieList);

  function updateShort() {
    localStorage.setItem('short', JSON.stringify(props.short));
  }
  function updateQuery() {
    setQuery(props.search);
    localStorage.setItem('search', JSON.stringify(props.search));
    if (props.search.length && window.location.pathname === '/movies') {
      const data = showAllMovies
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

  React.useEffect(() => {
    updateShort();
    updateQuery();
  }, [props]);

  return [
    filteredMovies,
    query,
  ];
}
export default Movies;
