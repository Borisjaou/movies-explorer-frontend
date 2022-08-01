import React, { useEffect, useState } from 'react';
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
import { auth } from '../../utils/Auth';
import { api } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
/* import Preloader from '../Movies/Preloader/Preloader' */

import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    auth
      .getUserInfo()
      .then((user) => {
        console.log(user);
        setLoggedIn(true);
        setCurrentUser(user);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }, []);
  useEffect(() => {
    auth
      .getUserInfo()
      .then(() => {
        setLoggedIn(true);
        /* history.push('/'); */
      })
      .catch((value) => {
        setLoggedIn(false);
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }, [history]);

  function handleRegister({ name, email, password }) {
    auth
      .registerUser(name, password, email)
      .then(() => {
        history.push('/signin');
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
        setErrorMessage('Что-то пошло не так');
      });
  }
  function handleLoginUser({ email, password }) {
    auth
      .loginUser(email, password)
      .then(() => {
        setLoggedIn(true);
        auth.getUserInfo()
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
  function handleSignOut() {
    auth
      .logOut()
      .then(() => {
        setLoggedIn(false);
        history.push('/signin');
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }

  function handleUpdateUser({ name, email }) {
    console.log(name, email);
    api
      .editProfile(name, email)
      .then((user) => {
        setCurrentUser(user);
      })
      .catch((value) => {
        console.log(`Ошибка. Запрос не выполнен ${value}`);
      });
  }

  return (
    <main className='page'>
      <CurrentUserContext.Provider value={currentUser}>

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
          <ProtectedRoute
            path='/movies'
            loggedIn={loggedIn}
          >
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
          </ProtectedRoute>

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
          {/*           <ProtectedRoute
            path='/profile'
            loggedIn={loggedIn}
            component={Profile}
            signOut={handleSignOut}
            onRegister={handleUpdateUser}
            errorMessage={errorMessage}
          />
 */}
          <Route path='/signin'>
            <Login onRegister={handleLoginUser} errorMessage={errorMessage} />
          </Route>
          <Route path='/signup'>
            <Register onRegister={handleRegister} errorMessage={errorMessage} />
          </Route>
          <Route path='/check'><Navigation /></Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </main >

  );
}

export default App;
