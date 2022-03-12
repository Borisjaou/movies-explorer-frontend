import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, Switch, useHistory } from 'react-router';
function App() {



  return (
    <div>
      <Header />
      <Switch>
        <Route path='/'></Route>
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