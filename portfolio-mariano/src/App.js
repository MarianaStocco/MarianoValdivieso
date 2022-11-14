import React from 'react';

// import components
import Artworks from './components/Artworks';
import Home from './components/Home';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';


const App = () => {
  return (
    <>
      <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Artworks />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
