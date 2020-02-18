import React, { useState } from 'react';
import './skeleton/normalize.css';
import './skeleton/skeleton.css';
import './App.css';

import Login from './login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/header/Header';
import Navigation from './components/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import Sprint from './components/sprint/Sprint';
import NewProjectRequest from './components/newprojectrequest/NewProjectRequest';
import Epic from './components/epic/Epic';
import BugFixRequest from './components/bugfixrequest/BugFixRequest';


function App() {
 
  const authData = JSON.parse(localStorage.getItem("auth"));

  return (
    <BrowserRouter>
      {
        authData !== null && authData.isAuthenticated ?
          <div>
            <Header />
            <div className="divider"></div>
            <div className="row">
              <div className="three columns">
                <Navigation />
              </div>
              <div className="nine columns">
                <Route path="/" exact component={ Dashboard } />
                <Route path="/sprint" exact component={ Sprint } />
                <Route path="/newproject" exact component={ NewProjectRequest } />
                <Route path="/epic" exact component={ Epic } />
                <Route path="/bugfix" exact component={ BugFixRequest } />
                
              </div>
            </div>
          </div>
          :
          <Login />
      }
    </BrowserRouter>
  );
}

export default App;
