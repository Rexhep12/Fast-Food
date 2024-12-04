import React from 'react';
import Navbar from './Components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Menu from './Components/pages/menu/Menu';
import Contact from './Components/pages/contact/Contact';
import About from './Components/pages/about/About';

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Routes */}
      <div>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
