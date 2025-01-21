import React from 'react';
import './Signup.css';
import{Link} from "react-router-dom";


const Sign_up = () => {
  return (
    <div className="signup-container">
    <div className='signup-card'>
        <h2>SIGN UP</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username : </label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :   </label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile Number : </label>
            <input type="text" id="phone" name="phone" />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password :  </label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">SIGN UP</button>
        </form>
  
        <a href="/forgot-password">Forgot Password?</a>
        <p> Already have an account?<Link to ="/Login"> Login</Link>
  
        </p>
      </div>
     </div>
  );
};

export default Sign_up;

