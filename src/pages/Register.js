import React, { useState } from 'react';
import axios from 'axios';

const API_URL =
  'https://rmczj8ops2.execute-api.us-east-1.amazonaws.com/dev';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const registerUser = async () => {
    try {
      await axios.post(`${API_URL}/register/`, { username, email });
      alert('User registered successfully!');
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={registerUser}>Sign Up</button>
    </div>
  );
};

export default Register;
