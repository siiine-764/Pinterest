
import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';
import Pin from './components/Pin';
import './App.css';
import MenuContainer from './components/MenuContainer';

import Data from "./components/Data";
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch image URLs from your backend API
    axios.get('/api/images')
      .then(response => setImages(response.data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/images') // Adjust the URL based on your backend routes
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);



//   useEffect(() =>{
//     const allIcon = document.querySelectorAll(".iconContainer");
    
//     function setMenuActive(){
//       allIcon.forEach((n) => n.classList.remove("active"));
//       this.classList.add("active");
//     }
//     allIcon.forEach((n)=> n.addEventListener("click",setMenuActive));
 
// }, []);
  return (
    <div className="App">
      <div className="menuContainer">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEjYfBnTQ5_GXIDZlOvqD_hirQ2o2GW30UrXODXNh&s" alt="logo" className='logo'></img>
      

      <div className="subMenu">
        <div>
        <MenuContainer icon={<Person/>}/>
        <MenuContainer icon={<Notifications/>}/>
        <MenuContainer icon={<Chat/>}/> 
        </div>

        <div>
        <MenuContainer icon={<FavoriteRounded/>}/>
        
        </div>

        <div>
        <MenuContainer icon={<QuestionMark/>}/>
        <MenuContainer icon={<Add/>}/>
         
        </div>
        </div>
      </div>
      
      <main>
        <div className="searchBox">
          <input type="text" placeholder="Search.."/>
          <div className="search">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKIZUMg9MvWTk2HyVE8FJMtIcJAcNZNoZRP3kvag2yW4qHOxMvo51vmgMbQY6j2JB12Ug&usqp=CAU" alt="rightArrow" className="searchArrow"></img>
          </div>
        </div>
        <div className="mainContainer">

          {
            Data && Data.map((data) => <Pin 
            key={data.id} 
            pinSize ={data.size} 
            imgSrc={data.imgSrc} 
            name={data.name} 
            link={data.link} />)}
          
        </div>
      </main>
        <div>
      <h1>Images from MongoDB</h1>
      <div>
        {images.map(image => (
          <img key={image._id} src={image.name} alt={`Image ${image._id}`} />
        ))}
      </div>


<div>
      {data.map(item => (
        <img key={item._id} src={item.name} alt={`Image ${item._id}`} />
        // <div key={item._id}>{item.name}</div>
      ))}
    </div>

    </div>
</div>
  );
}

export default App;
