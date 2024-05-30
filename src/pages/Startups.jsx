import React from 'react';
import pdv from '../assets/logopdv.png';
import pioneer from '../assets/infotech.png'
import './startup.css'

const Startups = () => {
  return (
    <>
    <div className='startup-heading'>
    Startup's
    </div>
      <div className='startup-container'>
        <div className='startup-box'>
          <div className='startup-img'>
            <img src={pdv}/>
          </div>
          <div className='startup-title'>
          Pushpak Drone Viman Pvt. LtD
          </div>
        </div>

        <div className='startup-box'>
          <div className='startup-img'>
            <img src={pioneer}/>
          </div>
          <div className='startup-title'>
          Pioneer Infotech
          </div>
        </div>
      </div>
    </>
  )
}

export default Startups;