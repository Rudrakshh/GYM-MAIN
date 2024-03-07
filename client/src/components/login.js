import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './login.css'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        // Redirect to the homepage with the username
        navigate(`/GYM-WEBSITE/${response.data.userId}`);
      } else {
        // Handle login error
        alert("WRONG CRENTIALS")
      }
    } catch (error) {
      alert("WRONG CRENTIALS")
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
