// Navigation.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status

  useEffect(() => {
      // Check authentication status when the component mounts
      const token = localStorage.getItem('token'); // Assuming you store the authentication token in localStorage
      setIsLoggedIn(!!token); // Update authentication status based on the presence of the token
  }, []);
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
        {isLoggedIn ? ( // Conditionally render the link based on authentication status
                    <li><Link to="/upload">Upload Image</Link></li>
                ) : null}
      </ul>
    </nav>
  );
}

export default Navigation;
