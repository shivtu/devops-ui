import React from 'react';
import './skeleton/normalize.css';
import './skeleton/skeleton.css';
import './App.css';

import Login from './login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/Navigation';

function App() {
  const authData = JSON.parse(localStorage.getItem("auth"));
  if (authData !== null && authData.isAuthenticated) {
    return (
      <div>
        <Header />
        <div className="divider"></div>
        <div className="row">
          <div className="three columns">
            <Navigation />
          </div>
          <div className="nine columns">
            <Dashboard/>
          </div>
        </div>

      </div>
    )
  } else {
    return (
      <Login />
    );
  }

}

export default App;
