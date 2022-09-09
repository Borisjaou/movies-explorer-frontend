import React from 'react';

function Movies(props) {
  const [shortMovie, setShortMovie] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  function updateShort() {
    setShortMovie(props.short);
    localStorage.setItem('short', JSON.stringify(props.short));
  }

  function updateQuery() {
    setQuery(props.search);
    localStorage.setItem('search', JSON.stringify(props.search));
    if (props.search.length) {
      const data = movies.filter((item) => item.nameRU.toLowerCase()
        .indexOf(props.search.toLowerCase()) >= 0
        && (!props.short || item.duration <= 40));
      setFilteredMovies(data);
    }
  }

  function allMovies() {
    setMovies(props.movies);
    localStorage.setItem('movies', JSON.stringify(props.movies));
  }

  React.useEffect(() => {
    updateShort();
    updateQuery();
    allMovies();
  }, [props]);

  return [
    filteredMovies,
    shortMovie,
    query,
  ];
}
export default Movies;
