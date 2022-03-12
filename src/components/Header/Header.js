import React from 'react';
import logo from '../../images/logo.svg';
import { Link, Route, Switch } from 'react-router-dom';

function Header() {
  return (

    <header className=''>
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