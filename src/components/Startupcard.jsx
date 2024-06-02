import React from 'react';
import './startupcard.css'
import pdv from '../assets/startup/logopdv.png';
import pioneer from '../assets/startup/infotech.png'

const Startupcard = () => {
  return (
    <>
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

export default Startupcard