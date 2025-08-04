import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <>
      <div className="home-container">
        <p>Home - výběr mezi nástroji</p>
        <div className='home-button-group'>
          <Link to="/framer" className='home-button'>Framer</Link>
          <Link to="/anima" className='home-button'>Anima</Link>
          <Link to="/framerCELEK" className='home-button'>FramerCELEK</Link>
        </div>
      </div>
    </>
  )
}

export default Home