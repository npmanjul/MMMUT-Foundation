import React from 'react';
import './aboutusmissionvision.css';
import mission from '../assets/Aboutus/mission.png'
import vision from '../assets/Aboutus/vision.png'

const Aboutusmissionvision = () => {
    return (
        <>
            <div className='aboutusmissionvision'>

                <div className='Aboutusmissionvision-mission'>
                    <div className='Aboutusmissionvision-img'>
                        <div className='Aboutusmissionvision-logo'>
                        <img  src={mission}/>
                        </div>
                        <div className='Aboutusmissionvision-title'>
                       Mission
                        </div>
                    </div>
                    <div className='Aboutusmissionvision-detail'>
                    Our aim is to create leading entrepreneurs and successful ventures by fostering innovative minds, young entrepreneurs, students, alumni and other members of the MMMUT Foundation community and providing them with required training, mentorship, technical assistance, legal guidance, financial grants, connect to venture capitalist, working space, sharing knowledge and community networks.
                    </div>
                </div>


                <div className='Aboutusmissionvision-mission'>
                    <div className='Aboutusmissionvision-img'>
                        <div className='Aboutusmissionvision-logo'>
                        <img  src={vision}/>
                        </div>
                        <div className='Aboutusmissionvision-title'>
                        Vision
                        </div>
                    </div>
                    <div className='Aboutusmissionvision-detail'>
                    Empowering a premier incubation hub with global recognition, we foster a dynamic entrepreneurial ecosystem for industrial R&D. Through visionary startups, strategic partnerships, and cutting-edge research, we drive economic and scientific growth, positioning our society at the forefront of global innovation. Together, we cultivate creativity, empower businesses, and ensure sustainable prosperity.                   </div>
                </div>
            </div>
        </>
    )
}

export default Aboutusmissionvision