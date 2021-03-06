import React from 'react';
import Logo from '../img/kandor.png';
import Topics from './Topics.js';
import Chat from './Chat';

const Landing = () => {
  return (
    <div>
      <div className='Navbar'>
        <img src={Logo} alt='' />
      </div>
      <div className='container'>
        <h1 style={{ paddingTop: '50px' }}>
          <span style={{ color: '#496076' }}>Kandor. </span>Fostering a
          community for you.
        </h1>
        <Topics />
        <Chat />
      </div>
    </div>
  );
};

export default Landing;
