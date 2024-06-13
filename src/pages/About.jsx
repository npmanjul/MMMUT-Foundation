import React from 'react';
import Aboutushero from '../components/Aboutushero.jsx';
import Aboutusdetail from '../components/Aboutusdetail.jsx';
import Aboutusquote from '../components/Aboutusquote.jsx';
import Aboutusmissionvision from '../components/Aboutusmissionvision.jsx';
import Boardmembers from '../components/Boardmembers.jsx';


const About = () => {
  return (
    <>
      <div className='top_main_container'>
        <Aboutushero />
        <div className='main_container'>
          <Aboutusdetail />
          <Aboutusquote />
          <Aboutusmissionvision />
          <Boardmembers />
        </div>
      </div>
    </>
  )
}

export default About