import './App.css';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Post from './pages/post/Post';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import { AuthProvider } from './contexts/AuthContext';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";



function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/gallery/images`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} data={data} /> */}
            <Route path="/" element={<Home data={data} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/upload" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

