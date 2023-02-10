import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// import components
import Artworks from './components/Artworks';
import Home from './components/Home';
import Header from './components/Header';
import DetailArt from './components/Detail';


const App = () => {
  return (
    <>
      <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Artworks />} />
            <Route exact path="/detail/:id" element={<DetailArt />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
