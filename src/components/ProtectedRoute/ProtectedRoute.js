/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from '../Movies/Preloader/Preloader';

function ProtectedRoute({ component: Component, ...props }) {
  if (props.loggedIn === null) {
    return (
      <Preloader />
    );
  }
  return (
    <Route>
      {() => props.loggedIn ? <Component {...props} /> : <Redirect to='/signin' />
      }
    </Route>
  );
}

export default ProtectedRoute;
