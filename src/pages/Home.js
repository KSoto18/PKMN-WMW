import React, { useState } from 'react';

// import './App.css'

import Navbar from '../components/Navbar';
import About from '../components/About';
import Contact from '../components/Contact';
import Body from '../components/Body';



function Home() {

  const [pageIndex, setPageIndex] = useState(0);

  return (

    <div className='body'>
      <Navbar 
         showBody={() => setPageIndex(0)}
         showAbout={() => setPageIndex(1)}
         showContact={() => setPageIndex(2)}
         />
         {pageIndex === 0 ? (
          <Body />
         ) : pageIndex === 1 ? (
          <About />
         ) : pageIndex === 2 ? (
          <Contact />
         ) : (
          <Body/>
         )}
    </div>
  );
}

export default Home;