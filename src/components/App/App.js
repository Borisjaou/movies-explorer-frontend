import React from 'react';
import '../../vendor/normalize.css';
import './App.css' // глобальные стили страницы
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import About from '../Main/About/About';
import Portfolio from '../Main/Portfolio/Portfolio';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MovesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader'

import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';

import { Route, Switch } from 'react-router';
import PageNotFound from '../PageNotFound/PageNotFound';
function App() {


  return (

    <div className='page'>
      {/* <Header /> */}
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
          <MovesCardList />
          <Footer />
        </Route>
        <Route path='/profile'>
          <Header />
          <Profile />
        </Route>
        <Route path='/signin'></Route>
        <Route path='/signup'></Route>
        <Route path='/check'><Navigation /></Route>
        <Route path='*'>
          <PageNotFound />
        </Route>

      </Switch>
      {/* <Footer /> */}
    </div >


  );
}

export default App;