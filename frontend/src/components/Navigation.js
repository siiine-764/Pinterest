// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navigation() {
  const { state } = useAuth();
  const { user } = state;
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
          <li><Link to="/upload">Upload Image</Link></li>
          {user && (
          <li>
            <span>Welcome, {user.email}, {user.username}!</span>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
