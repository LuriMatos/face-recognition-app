import React from 'react';  
import './Logo.css';
import Tilt from 'react-tilt';
import facialrec from './facial-recognition.png';


const Logo = () => {
  return (
    <Tilt className="Tilt br2 shadow-2 ml5" options={{ max : 40 }} style={{ height: 150, width: 150 }} >
        <div className='Tilt-inner pa3'>
            <img className='logo-img' src={facialrec} alt='Person with face being scanned' />
        </div>
   </Tilt>
  );
}

export default Logo;
