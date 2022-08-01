/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() => props.loggedIn ? <Component {...props} /> : <Redirect to='/signin' />
      }
    </Route>
  );
}

export default ProtectedRoute;
/* const PrivateRoute = ({ component: Component, ...props }) => (

  <Route
    render={() => props.loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/signin' />
    )
    }
  />
);

export de1ault PrivateRoute; */
