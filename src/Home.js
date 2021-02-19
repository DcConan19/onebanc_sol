// import logo from './logo.svg';
import React from 'react';
import './Home.css';
import Typewriter from "typewriter-effect";
// import logo from './logo_onebanc.png'

const Home=() => {
  return (
    <div className="Home">
    {/* hello */}
    {/* <img src={logo} alt="Logo" className="logo" /> */}
    <br />
   <Typewriter
  options={{
    strings: ['Anukriti Rath', 'Ugly'],
    autoStart: true,
    pauseFor:1000,
    loop: true,
  }}
  />
     
    </div>
  );
};

export default Home;
