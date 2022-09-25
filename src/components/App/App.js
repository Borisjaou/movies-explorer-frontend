import React from 'react';
import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import '../../vendor/normalize.css';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import About from '../Main/About/About';
import Portfolio from '../Main/Portfolio/Portfolio';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { api } from '../../utils/MainApi';
import { search } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

import Popup from '../Popup/Popup';

function App() {
  const getStorageSearchItem = JSON.parse(localStorage.getItem('search'));
  const savedSearchItem = getStorageSearchItem === null ? '' : getStorageSearchItem;

  const getStorageShort = JSON.parse(localStorage.getItem('short'));
  const savedShort = getStorageShort === undefined || null ? false : getStorageShort;

  const history = useHistory();
  const [errorMessage, setErrorMessage] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [savedMovies, setSavedMovies] = React.useState([]);

  const [movieItem, setMovieItem] = React.useState([]);
  const [searchItem, setSearchItem] = React.useState(savedSearchItem);
  const [short, setShort] = React.useState(savedShort);
  const [popup, setPopup] = React.useState(false);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((user) => {
        console.log(user);
        setCurrentUser(user);
        setLoggedIn(true);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }, []);

  /*   React.useEffect(() => {
      api
        .getUserInfo()
        .then((user) => {
          console.log(user);
          setCurrentUser(user);
          setLoggedIn(true);
        })
        .catch((value) => {
          console.log(`Ошибка. Запрос не выполнен ${value}`);
        });
    }, [loggedIn, history]); */

  /*   React.useEffect(() => {
      if (window.location.pathname === '/signup' || window.location.pathname === '/signin') {
        history.push('/movies');
      } else {
        history.push(window.location.pathname);
      }
    }, [loggedIn, window.location.pathname]); */

  React.useEffect(() => {
    api
      .getMovies()
      .then((items) => {
        const newArr = items.filter((e) => (e.owner === currentUser._id));
        setSavedMovies(newArr);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }, [currentUser]);
  /* currentUser, savedMovies */

  function showMessage() {
    setTimeout(() => setPopup(false), 1000);
  }

  function handleLoginUser({ email, password }) {
    api
      .loginUser(email, password)
      .then(() => {
        setLoggedIn(true);
        api.getUserInfo()
          .then((user) => {
            setCurrentUser(user);
            localStorage.setItem('authorized', JSON.stringify(true));
            setLoggedIn(true);
          });
        history.push('/movies');
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
        setErrorMessage('Что-то пошло не так');
      });
    search
      .searchMovie()
      .then((items) => {
        console.log('Сработка');
        localStorage.setItem('allMovies', JSON.stringify(items));
        setMovieItem(items);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
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
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
        setMovieItem([]);
        setSearchItem('');
        setShort(false);
        history.push('/');
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
        setPopup(true);
        showMessage();
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

  /*   function getInitialsMovies() {
      api
        .getMovies()
        .then((items) => {
          const newArr = items.filter((e) => (e.owner === currentUser._id));
          setSavedMovies(newArr);
        })
        .catch((value) => {
          console.log(`Ошибка. Запрос не выполнен ${value}`);
        });
    } */

  function handleLike(movie) {
    api
      .createMovie(movie)
      .then((item) => {
        /* setSavedMovies((state) =>
         state.map((c) => (c.movieId === movie.movieId ? item : c), console.log(state))); */
        setSavedMovies([...savedMovies, item]);
        setPopup(true);
        showMessage();
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }

  function handleMovieDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== card._id));
        /* getInitialsMovies(); */
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }

  function handleGoBack() {
    history.goBack();
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
          <Route path='/check'><Popup /></Route>
          <Route path='*'>
            <PageNotFound onBack={handleGoBack} />
          </Route>
        </Switch>
      </main >
      <Popup isOpen={popup} />
    </CurrentUserContext.Provider>
  );
}

export default App;
