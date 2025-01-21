import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";

const Login = () => {
  return (
    
      
    <div className="login-container">
  <div className='login-card'>
      <h2>Login Page</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username : </label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :  </label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>

      <a href="/forgot-password">Forgot Password?</a>
      <p> Don't have an account?<Link to="/sign_up"> SIGN UP</Link>

      </p>
    </div>
   </div>
  );
};

export default Login;
