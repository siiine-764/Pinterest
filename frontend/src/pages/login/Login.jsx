import React, { useState } from 'react';
import Navigation from '../../components/Navigation'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import Cookies from 'js-cookie';

const Login = () => {
    const { dispatch } = useAuth();
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
          const user = { email: email};
          // console.log(data);
            // Dispatch user data to the context
            dispatch({ type: 'LOGIN', payload: user });
            // Set a cookie (for example, userToken)
            Cookies.set('userToken', 'MWEaGTQrGDTUHKw6DchMOLySANrH0zndt8QdKUsbdZg=', { expires: 7, SameSite: 'None', Secure: true}); // expires in 7 days
          // Store user data in localStorage for persistence
          localStorage.setItem('user', JSON.stringify(data));
          if (response.status  === 400) {
            alert("Invalid credentials password or user");
          }
          else
            navigate("/");
          
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
