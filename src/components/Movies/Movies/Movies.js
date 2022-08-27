import React from 'react';

function Movies(props) {
  console.log(props);
  const [shortMovie, setShortMovie] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);

  function updateFilteredMovies() {
    setFilteredMovies();
    localStorage.setItem('filteredMovies', JSON.stringify());
  }

  function updateQuery() {
    setQuery(props.search);
    localStorage.setItem('search', JSON.stringify(props.search));
  }

  function updateShort() {
    setShortMovie(props.short);
    localStorage.setItem('short', JSON.stringify(props.short));
  }

  function allMovies() {
    setMovies(props.movies);
    localStorage.setItem('movies', JSON.stringify(props.movies));
  }

  /* этот эффект чтобы обновить локальное хранилище */
  React.useEffect(() => {
    updateFilteredMovies();
    updateQuery();
    updateShort();
    allMovies();
  }, [props]);
  console.log(localStorage);

  /*   React.useEffect(() => {
      const myMovies = JSON.parse(localStorage.getItem('movies') || '[]');
      updateMovies(myMovies);
      updateFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies') || '[]'));
      updateQuery(localStorage.getItem('query') || '');
      updateShort(JSON.parse(localStorage.getItem('short') || 'false'));

      if (!movies.length) {
        search
          .getMovies()
          .then((movies) => {
            updateMovies(movies);
            updateFilteredMovies(movies);
          }, []);
      }
    }); */

  return [
    movies,
    filteredMovies,
    query,
    shortMovie,
  ];
}
export default Movies;
