import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send login request to the server
    fetch('/api/auth/register')
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      // Handle successful login, e.g., redirect to dashboard
      console.log("Successful!");
    })
    .catch(error => {
      console.error('------>>>Error logging in:', error);
      // Handle login error, e.g., display error message
    });
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
          name="username" // Add name attribute
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          name="password" // Add name attribute
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
