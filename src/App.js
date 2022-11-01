import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/:user' element={<Card/>}></Route>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
