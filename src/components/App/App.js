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


import { Route, Switch } from 'react-router';
function App() {


  return (
    <div className='page'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Promo />
          <AboutProject />
          <Techs />
          <About />
          <Portfolio />
        </Route>
        <Route path='/movies'>
          <SearchForm />
          <MovesCardList />
        </Route>
        <Route path='/saved-movies'></Route>
        <Route path='/profile'></Route>
        <Route path='/signin'></Route>
        <Route path='/signup'></Route>
        <Route path='*'>

        </Route>

      </Switch>
      <Footer />
    </div >
  );
}

export default App;