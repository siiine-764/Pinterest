import React, { useState } from 'react';
import Navigation from '../../components/Navigation'
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [profileimage, setProfileimage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {

            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, username, profileimage })
            });
            
            const data = await response.json();
            if (response.status  === 400) {
                alert("Invalid credentials password or user");
            }
            else
                navigate("/");
            console.log(data); // Handle response from the server
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

  return (
    <div>
      <Navigation />
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="text" name="profileImage" value={profileimage} onChange={(e) => setProfileimage(e.target.value)} />

            <button type="submit">Register</button>
        </form>
    </div>
  );
};

export default Register;
