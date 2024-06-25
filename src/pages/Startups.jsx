import React from 'react';
import './startup.css'
import Startupcard from '../components/Startupcard';

const Startups = () => {
  return (
    <>
    <div className='startup-herosection'>
    Our Startup's
    </div>

    <div className='startup-heading-box'>
    <div className='startup-heading'>Our Incubated Startup's</div>
    <div className='horzontal-line'></div>
    </div>

    <Startupcard/>
    
    </>
  )
}

export default Startups;