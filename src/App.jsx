import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About'
function App() {
  
  return (
    <body>
    <div className="header-container">
        <h1> int max();</h1>
        <div className="tab-cont">
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
                <li>Hobbies</li>
                <li>Movies</li>
                <li>Works</li>
            </ul>
        </nav>
        </div>
       
    </div>
<div className="intro-cont">

    
<p className="intro-page">
            <span className="hello">
                Hello World, I'm
            </span ><br/>
            <span className="name">
                Maximilian Axel E. Enolpe
            </span ><br/>
            <span className="welcome">
                Welcome to my Personal Website
            </span>
            
                </p>
                
                <div className="image">
                <img className= "pic" src="/src/assets/RobloxScreenShot20240624_115102067.png" alt="Image Description" />

</div> 
     </div>
  <About/>

             
    </body>
  )
}

export default App
