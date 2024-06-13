import React from 'react';
import './boardmembers.css';
import JPSainiImage from '../assets/Aboutus/J P Saini.png';
import SKSoniImage from '../assets/Aboutus/SK Soni.jpg'
import JeeootSingh from '../assets/Aboutus/JeeootSingh.jpg';
import SanjayMishra from '../assets/Aboutus/SanjayMishra.jpg';
import jayprakash from '../assets/Aboutus/jaiprakash.jpg';
import abhijeetmishra from '../assets/Aboutus/abhijeetmishra.jpg'

const profiles = [
    {
        image: JPSainiImage,
        profilename: "Prof. J.P. Saini",
        profiledesignation: "Chairman & Board of Director"
    },
    {
        image: SKSoniImage,
        profilename: "Prof. Sanjay Kumar Soni",
        profiledesignation: "Board of Director"
    },
    {
        image: JeeootSingh,
        profilename: "Prof. Jeeoot Singh",
        profiledesignation: "Board of Director "
    },
    {
        image: SanjayMishra,
        profilename: "Prof. Sanjay Mishra",
        profiledesignation: "Board of Director "
    },
    {
        image: jayprakash,
        profilename: "Prof. Jay Prakash",
        profiledesignation: "Board of Director "
    },
    {
        image: abhijeetmishra,
        profilename: "Prof. Abhijeet Mishra",
        profiledesignation: "Board of Director"
    },
];

const Boardmembers = () => {
    return (
        <div className='boardmember-container'>
            <div className='boardmember-heading'>
                Our Board Members
                <div className='horzontal-line'></div>
            </div>
            <div className='boardmember-area'>
                {profiles.map((profile) => (
                    <div className='boardmember-profile-cards'>
                        <div className='boardmember-img'>
                            <img src={profile.image} alt={profile.profilename} />
                        </div>
                        <div className='boardmember-detail'>
                            <div className='boardmember-name'>
                                {profile.profilename}
                            </div>
                            <div className='boardmember-designation'>
                                {profile.profiledesignation}
                                <div>MMMUT Foundation</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Boardmembers;
