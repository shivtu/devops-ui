import React, { useState, useEffect } from 'react';
import './Login.css';

function Login() {
    const [auth, setAuth] = useState({isAuthenticated: false, accessToken: ''});

    async function userLogin () {
        const rawResponse = await fetch('http://localhost:5000/api/v1/userauth/getToken', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"userId":"USR12", "password": "random"})
      });
      const content = await rawResponse.json();
      if (rawResponse.status === 201) {
        setAuth({isAuthenticated: true, accessToken: content.accessToken});
      } else {
        alert('Wrong password!');
      } 
    }
    return (
    <div className="container">
        <div className="loginForm">
        <h2>DO-MGMT</h2>
        <input className="u-full-width" type="text" placeholder="User ID" />
        <input className="u-full-width" type="password" placeholder="Password" />
        <button className="loginButton" onClick={userLogin}>Login</button>
        </div>
    </div>
    );
}

export default Login;
