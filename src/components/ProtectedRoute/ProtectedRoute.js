/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  console.log(localStorage);
  const authorized = JSON.parse(localStorage.getItem('authorized'));
  return (
    <Route>
      {() => props.loggedIn || authorized ? <Component {...props} /> : <Redirect to='/signin' />
      }
    </Route>
  );
}

export default ProtectedRoute;
