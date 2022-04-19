import React from 'react';

import './App.css' // глобальные стили страницы
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Portfolio from '../Main/Portfolio/Portfolio';

import { Route, Switch, useHistory } from 'react-router';
function App() {



  return (
    <div className='page'>
      <Header />
      <Switch>
        <Route path='/'>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </Route>
        <Route path='/movies'></Route>
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