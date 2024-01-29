import React, { useState } from 'react';
import Navigation from '../../components/Navigation'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit1 = async (event) => {
      event.preventDefault();
      
      try {
          const response = await fetch('http://localhost:3001/api/auth/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
          });

          const data = await response.json();
          // navigate("/");
          // console.log(response.json());
          console.log(data); // Handle response from the server
      } catch (error) {
          console.error('Error logging in:', error);
      }
  };

  return (
    <div>
      <Navigation />
        <h2>Login</h2>
        <form onSubmit={handleSubmit1}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    </div>
  );
};

export default Login;
