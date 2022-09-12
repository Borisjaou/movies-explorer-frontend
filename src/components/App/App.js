import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import '../../vendor/normalize.css';
import './App.css'; // глобальные стили страницы
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import About from '../Main/About/About';
import Portfolio from '../Main/Portfolio/Portfolio';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
/* import { auth } from '../../utils/Auth'; */
import { api } from '../../utils/MainApi';
import { search } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Movies/Preloader/Preloader';

import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const getStorageSearchItem = JSON.parse(localStorage.getItem('search'));
  const savedSearchItem = getStorageSearchItem === null ? '' : getStorageSearchItem;

  const getStorageShort = JSON.parse(localStorage.getItem('short'));
  const savedShort = getStorageShort === undefined || null ? false : getStorageShort;

  const history = useHistory();
  const [errorMessage, setErrorMessage] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(null);
  /* const [isLoading, setIsLoading] = React.useState(false); */

  const [savedMovies, setSavedMovies] = React.useState([]);

  const [movieItem, setMovieItem] = React.useState([]);
  const [searchItem, setSearchItem] = React.useState(savedSearchItem);
  const [short, setShort] = React.useState(savedShort);

  React.useEffect(() => {
    api
      .getMovies()
      .then((items) => {
        setSavedMovies(items);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }, []);

  React.useEffect(() => {
    /* setIsLoading(false); */
    search
      .searchMovie()
      .then((items) => {
        localStorage.setItem('allMovies', JSON.stringify(items));
        setMovieItem(items);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
    /* .finally(() => setIsLoading(false)); */
  }, []);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }, []);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(() => {
        setLoggedIn(true);
      })
      .catch((value) => {
        setLoggedIn(false);
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }, [history]);

  function handleLoginUser({ email, password }) {
    api
      .loginUser(email, password)
      .then(() => {
        setLoggedIn(true);
        api.getUserInfo()
          .then((user) => {
            setCurrentUser(user);
          });
        history.push('/movies');
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
        setErrorMessage('Что-то пошло не так');
      });
  }

  function handleRegister({ name, email, password }) {
    api
      .registerUser(name, password, email)
      .then(() => {
        handleLoginUser({ email, password });
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
        setErrorMessage('Что-то пошло не так');
      });
  }

  function handleSignOut() {
    api
      .logOut()
      .then((i) => {
        setLoggedIn(false);
        console.log(localStorage);
        console.log(i);

        localStorage.clear();
        setSavedMovies([]);
        setMovieItem([]);
        setSearchItem('');
        setShort(false);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }

  function handleUpdateUser({ name, email }) {
    api
      .editProfile(name, email)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }

  function handleSearch({ searchRequest }) {
    setSearchItem(searchRequest);
  }

  function handelShort({ checked }) {
    setShort(checked);
  }

  function getInitialsMovies() {
    api
      .getMovies()
      .then((items) => {
        setSavedMovies(items);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }
  function handleLike(movie) {
    console.log(movie);
    api
      .createMovie(movie)
      .then((item) => {
        setSavedMovies((state) => state.map((c) => (c.movieId === movie.movieId ? item : c)));
        getInitialsMovies();
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
    console.log(savedMovies);
  }

  function handleMovieDelete(card) {
    console.log(card);
    api
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== card._id));
        getInitialsMovies();
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <main className='page'>
        <Switch>
          <Route exact path='/'>
            <Header loggedIn={loggedIn} />
            <Promo />
            <AboutProject />
            <Techs />
            <About />
            <Portfolio />
            <Footer />
          </Route>
          <Route path='/movies'>
            <Header />
            {/* <Movies movies={movieItem} search={searchItem} short={short} /> */}
            <SearchForm onSearch={handleSearch} onChecked={handelShort} />
            <ProtectedRoute
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              component={MoviesCardList}
              onLike={handleLike}
              short={short}
              search={searchItem}
              movies={movieItem}
              onDelete={handleMovieDelete}
            />
            <Footer />
          </Route>
          <Route path='/saved-movies'>
            <Header />
            <SearchForm onSearch={handleSearch} onChecked={handelShort} />
            <ProtectedRoute
              loggedIn={loggedIn}
              savedMovies={savedMovies}
              component={MoviesCardList}
              onLike={handleLike}
              short={short}
              search={searchItem}
              movies={movieItem}
              onDelete={handleMovieDelete}
            />
            <Footer />
          </Route>
          <Route path='/profile'>
            <Header />
            <ProtectedRoute
              loggedIn={loggedIn}
              component={Profile}
              signOut={handleSignOut}
              onRegister={handleUpdateUser}
              errorMessage={errorMessage}
            />
          </Route>
          <Route path='/signin'>
            <Login onRegister={handleLoginUser} errorMessage={errorMessage} />
          </Route>
          <Route path='/signup'>
            <Register onRegister={handleRegister} errorMessage={errorMessage} />
          </Route>
          <Route path='/check'><Preloader /></Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </main >
    </CurrentUserContext.Provider>
  );
}

export default App;
