import React from 'react';
import '../App.css';
import Carousal from '../components/Home_carousal'
import Card from '../components/Card';
import Event from '../components/Event';
import Achieve from '../components/Achieve';
import Offer from "../components/Offer"
import Form from '../components/Form'
import OfferCards from '../components/OfferCards';


const Home = () => {
  return (
    <div className='top_main_container'>
      <Carousal/>
      <div className='main_container'>
      <Card/>
      {/* <Event/> */}
      {/* <Achieve/> */}
      {/* <Offer/> */}
      <OfferCards/>
      <Form/>
      </div>
    </div>
  )
}

export default Home