import React from 'react';
import './skeleton/normalize.css';
import './skeleton/skeleton.css';
import './App.css';

import Login from './login/Login';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const authData = JSON.parse(localStorage.getItem("auth"));
  if(authData !== null && authData.isAuthenticated) {
    return (
      <Dashboard/>
    )
  } else {
    return (
      <Login/>
    );
  }
  
}

export default App;
