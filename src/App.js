import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './skeleton/normalize.css';
import './skeleton/skeleton.css';
import './App.css';

import Login from './login/Login';

function App() {
  return(
    <BrowserRouter>
      <Route exact path='/' component={ Login } />
      <Route path = '/login' component={ Login } />
    </BrowserRouter>
  );
}

export default App;
