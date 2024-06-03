import React from 'react'
import Carousal from '../components/Home_carousal'
import Card from '../components/Card';
import Event from '../components/Event';
import Achieve from '../components/Achieve';
import Offer from "../components/Offer"
import Form from '../components/Form'


const Home = () => {
  return (
    <div>
      <Carousal/>
      <Card/>
      {/* <Event/> */}
      {/* <Achieve/> */}
      {/* <Offer/> */}
      <Form/>
    </div>
  )
}

export default Home