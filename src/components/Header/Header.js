import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

import { Link, Route, Switch } from 'react-router-dom';

function Header() {
  return (

    <header className='header'>
      <a href='/' className='header__logo-button'><img src={logo} alt='Логотип' /></a>
      <Switch>
        <Route exact path='/'>
          <div className='header__button'>
            <Link className='header__reg-button' to='/signup'>Регистрация</Link>

            <Link className='header__login-button' to='/signin'>
              <div className='header__button_container'>Войти</div>
            </Link>

          </div>
        </Route>
        <Route path='/signin'>
        </Route>
        <Route path='/signout'>
        </Route>
        <Route path='/movies'>
          <Navigation />
        </Route>
        <Route path='/profile'>
          <Navigation />
        </Route>
        <Route path='/saved-movies'>
          <Navigation />
        </Route>
      </Switch>
    </header>

  );
}
export default Header;