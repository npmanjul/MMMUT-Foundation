import React from 'react';
import './startup.css'
import Startupcard from '../components/Startupcard';

const Startups = () => {
  return (
    <>
    <div className='startup-heading'>
    Startup's
    </div>

    <Startupcard/>
    
    </>
  )
}

export default Startups;