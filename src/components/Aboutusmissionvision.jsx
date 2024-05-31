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
                    Our aim is to create leading entrepreneurs and successful ventures by fostering innovative minds, young entrepreneurs, students, alumni and other members of the NSUT community and providing them with required training, mentorship, technical assistance, legal guidance, financial grants, connect to venture capitalist, working space, sharing knowledge and community networks.
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
                    Inspired from “योगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वात्मशुद्धये” of Bhagvat Geeta, we aspire to be a premiere incubation hub of national and global recognition that cultivates a self evolving entrepreneurial ecosystem of industrial R&D for the economic and scientific growth of the Society and Nation.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutusmissionvision