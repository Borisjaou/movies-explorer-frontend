import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link, Route, Switch } from 'react-router-dom';

function Header() {
  return (

    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип' />
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
          <div className=''>

          </div>

        </Route>
        <Route path='/profile'>

        </Route>
        <Route path='/saved-movies'>

        </Route>
      </Switch>
    </header>

  );
}
export default Header;