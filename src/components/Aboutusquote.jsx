import React from 'react';
import './aboutusqoute.css'
import lquote from '../assets/Aboutus/double-quotes-l.png';
import rquote from '../assets/Aboutus/double-quotes-r.png';


function Aboutusquote() {
  return (
    <>
      <div className='quote-container'>
        <div className='quote-box'>
          <div className='symbole-size-l'>
            <img src={lquote} alt='comma' />
          </div>
          <div className='quote-text'>
          Creativity is thinking up new things. Innovation is doing new things <br/> —Theodore Levitt
          </div>
          <div className='symbole-size-r'>
            <img src={rquote} alt='comma' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutusquote