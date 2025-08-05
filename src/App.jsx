// import React, { useEffect } from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import { Analytics } from '@vercel/analytics/next';

const App = () => {

  return (
    <div className='font-body'>
      <Analytics/>
      <Landing />
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;
