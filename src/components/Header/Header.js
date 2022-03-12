import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import { Link, Route, Switch } from 'react-router-dom';

function Header() {
  return (

    <header className='test'>
      <img src={logo} alt='Логотип' />
      <Switch>
        <Route exact path='/'>
          <div>
            <Link to='/signup'>Регистрация</Link>
            <Link to='/signin'>Войти</Link>
          </div>
        </Route>
      </Switch>
    </header>

  );
}
export default Header;