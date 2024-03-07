import React, { Component } from 'react';
import axios from 'axios';
import './register.css'

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      contact: '',
      password: '',
      confirmPassword: '',
      email: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: this.state.name,
      contact: this.state.contact,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      email: this.state.email,
    };

    try {
      // Replace 'http://localhost:YOUR_SERVER_PORT' with your server's actual URL and port
      const response = await axios.post('http://localhost:3001/api/register', formData);
      if (response.status === 201) {
        // Registration successful, show the success message
        alert("REGISTERD SUCCESSFULLY")
      }
      console.log(response.data); // Log the response from the server

      // You can also perform any client-side actions, like displaying a success message or redirecting the user.
    } catch (error) {
      console.error(error);
      // Handle errors, such as displaying an error message to the user.
    }

    // Clear the form fields after submission
    this.setState({
      name: '',
      contact: '',
      password: '',
      confirmPassword: '',
      email: '',
    });
  };

  render() {
    return (
      <div className="register-container">
        <h2>Register</h2>
        <form className='register-form' onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Contact:</label>
            <input
              type="text"
              name="contact"
              value={this.state.contact}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
        <p className="login-link">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    );
  }
}

export default RegisterForm;
