import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { Link } from 'react-router-dom';

const Sign_up = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  const [message, setMessage] = useState({
    error: '',
    success: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/addusers'
, formData);
      if (response.status === 200) {
        setMessage({ success: 'User registered successfully!', error: '' });
        setFormData({
          username: '',
          email: '',
          phone: '',
          password: '',
        });
      }
    } catch (err) {
      setMessage({
        success: '',
        error: err.response?.data?.message || 'Something went wrong!',
      });
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>SIGN UP</h2>
        {message.error && <p className="signup-error">{message.error}</p>}
        {message.success && <p className="signup-success">{message.success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">SIGN UP</button>
        </form>
        <a href="/forgot-password">Forgot Password?</a>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Sign_up;