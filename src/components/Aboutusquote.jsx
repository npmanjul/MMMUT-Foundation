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
            Learning gives creativity, Creativity leads to thinking, Thinking provides knowledge, Knowledge makes you great.
          </div>
          <span className='quote-writter' >— Dr. A.P.J. Abdul Kalam</span>
          <div className='symbole-size-r'>
            <img src={rquote} alt='comma' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutusquote