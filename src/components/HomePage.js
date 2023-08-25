import { Add, FavoriteRounded, Home, Notifications, Person, PriorityHigh, Search } from "@mui/icons-material";
import React, { useState } from 'react'
import MenuContainer from "./MenuContainer.js";
import Pin from "./Pin";
import Data from "./data";
import AddPinModalModal from "./AddPinModal.js";
import '../App.css';
import LoginModal from "./LoginModal.js";

function HomePage() {

  const [openAddPinModal, setOpenAddPinModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

  return (
      <div className="App">  
      <div className='menuContainer'>
      <img 
        src='https://res.cloudinary.com/dpqhfolay/image/upload/v1690824589/inspire_logo_f9zter.png' 
        alt='logo'
        className="logo"
        />  

      <div className='subMenu'>
        <div>
          <MenuContainer id = 'home' icon={<Home/>} />

          <div onClick = {() => {setOpenLoginModal(true);}}>
          <MenuContainer id = 'account' icon={<Person />} />
          </div>
          {openLoginModal && <LoginModal closeModal={setOpenLoginModal} />}
          
          <MenuContainer id = 'notification' icon={<Notifications/>} />
        </div>

        <div>
          <MenuContainer id = 'favorite' icon={<FavoriteRounded/>} />
        </div>

        <div>
          <div onClick = {() => {setOpenAddPinModal(true);}}>
          <MenuContainer id = 'add' icon={<Add/>}/>
          </div>
          {openAddPinModal && <AddPinModalModal closeModal={setOpenAddPinModal} />}
          <MenuContainer id = 'info' icon={<PriorityHigh/>} />
        </div>
        </div> 
      </div>
        
      <main>

        <div className="searchBox">
          <input type="text" placeholder="Search..." />
          <div className="search">
            {<Search/>}
          </div>

        </div>

        <div className = "mainContainer">
          {
            Data && 
            Data.map((data)=> (
            <Pin 
              key={data.id} 
              pinSize = {data.size} 
              imgSrc={data.imgSrc} 
              name={data.name} 
              link={data.link}
            />
          ))}
        </div>

      </main>
    </div>
  )
}

export default HomePage
