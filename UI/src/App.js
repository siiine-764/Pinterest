
import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';
import Pin from './components/Pin';
import { useEffect } from 'react';
import './App.css';
import MenuContainer from './components/MenuContainer';
import Data from "./components/Data";


function App() {
  useEffect(() =>{
    const allIcon = document.querySelectorAll(".iconContainer");
    
    function setMenuActive(){
      allIcon.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    allIcon.forEach((n)=> n.addEventListener("click",setMenuActive));
 
}, []);
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
          
          {/* <Pin pinSize ={'medium'}/>
          <Pin pinSize ={'large'}/>
          <Pin pinSize ={'large'}/>
          <Pin pinSize ={'medium'}/>
          <Pin pinSize ={'small'}/>
          <Pin pinSize ={'small'}/>
          <Pin pinSize ={'medium'}/>
          <Pin pinSize ={'large'}/>
          <Pin pinSize ={'large'}/>
          <Pin pinSize ={'medium'}/>
          <Pin pinSize ={'small'}/> */}
          
        </div>
      </main>
      
    </div>
  );
}

export default App;
