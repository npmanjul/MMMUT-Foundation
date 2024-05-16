import React from 'react'
import Carousal from '../components/Home_carousal'
import Card from '../components/Card';
import Event from '../components/Event';
import Achieve from '../components/Achieve';
import Offer from "../components/Offer"
const Home = () => {
  return (
    <div>
      <Carousal/>
      <Card/>
      <Event/>
      <Achieve/>
      <Offer/>
      

    </div>
  )
}

export default Home