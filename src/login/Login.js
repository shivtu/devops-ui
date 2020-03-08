import React from 'react';
import { useForm } from 'react-hook-form';

// https://www.npmjs.com/package/react-spinners
// https://www.davidhu.io/react-spinners/
// import ScaleLoader from "react-spinners/ScaleLoader";

import './Login.css';
import App from '../App';

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const authData = localStorage.getItem("auth");
  const onSubmit = async function (loginData) {

    const rawResponse = await fetch('http://localhost:5000/api/v1/userauth/getToken', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "userId": loginData.userid, "password": loginData.password })
    });
    const content = await rawResponse.json();
    if (rawResponse.status === 201) {
      localStorage.setItem("auth", JSON.stringify({ isAuthenticated: true, accessToken: content.accessToken }));
      window.location.reload();
    } else {
      alert('Wrong password!', rawResponse.status);
    }
  }
  return (
    <div>
      {
        authData !== null && authData.isAuthenticated ? <App /> :
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="loginForm">
                <h2>DO-MGMT</h2>
                {/* <ScaleLoader
                  size={150}
                  color={"burlywood"}
                  loading={true}
                /> */}
                {errors.userid && <code className="error">User ID is required</code>}
                <input className="u-full-width" type="text" placeholder="User ID" name="userid" ref={register({ required: true })} />
                {errors.password && <code className="error">Password is invalid</code>}
                <input className="u-full-width" type="password" placeholder="Password" name="password" ref={register({ required: true, minLength: 6 })} />
                <button className="loginButton" >Login</button>
                <br />
                <a href="#">Forgot Password</a>
              </div>
            </form>
          </div>
      }
    </div>
  );
}

export default Login;
