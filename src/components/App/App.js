import React, { useState } from 'react';
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
import MovesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { auth } from '../../utils/Auth';
/* import Preloader from '../Movies/Preloader/Preloader' */

import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
// import { auth } from '../../utils/Auth';
// import { useForm, useFormWithValidation } from '../../utils/FormValidation';

function App() {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  function handleRegister({ name, email, password }) {
    auth
      .registerUser(name, password, email)
      .then(() => {
        history.push('/signin');
      })
      .catch(() => {
        setErrorMessage('Что-то пошло не так');
      });
  }
  function handleLoginUser({ email, password }) {
    auth
      .loginUser(password, email)
      .then(() => {
        history.push('/movies');
      })
      .catch(() => {
        setErrorMessage('Что-то пошло не так');
      });
  }

  return (
    <main className='page'>
      <Switch>
        <Route exact path='/'>
          <Header />
          <Promo />
          <AboutProject />
          <Techs />
          <About />
          <Portfolio />
          <Footer />
        </Route>
        <Route path='/movies'>
          <Header />
          <SearchForm />
          <MovesCardList />
          <Footer />
        </Route>
        <Route path='/saved-movies'>
          <Header />
          <SearchForm />
          <MovesCardList />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header />
          <Profile />
        </Route>
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
    </main >
  );
}

export default App;
