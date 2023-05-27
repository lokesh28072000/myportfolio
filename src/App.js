import React from 'react';
// import Pg2 from './components/page2'
import Pg from './components/page2'
import HOME from './components/HOME';
import ABOUT from './components/ABOUT'
import CONTACT from './components/CONTACT';
import PROJECTS from './components/PROJECTS';
import Navbar from './components/Navbar';
import './index.css'
import { BrowserRouter ,Routes,Route } from 'react-router-dom';

  const App = () => {
  return (
   
    <>
     
     <BrowserRouter>
     <Navbar/>
      <Routes>
    

      <Route path="/"  element={HOME} />
      <Route path="/about"  element={ABOUT} />
      <Route path="/contact"  element={CONTACT} />
      <Route path="/project"  element={PROJECTS} /> 
      </Routes>
      </BrowserRouter>
 
       
      <Pg /> 
    </>
  )
}
export default App


