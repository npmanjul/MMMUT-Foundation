import React from 'react';
import './offercards.css';
import image1 from '../assets/Offerimgs/image1.jpg';
import image2 from '../assets/Offerimgs/image2.jpg';
import image3 from '../assets/Offerimgs/image3.jpg';
import image4 from '../assets/Offerimgs/image4.avif';
import image5 from '../assets/Offerimgs/image5.avif';
import image6 from '../assets/Offerimgs/image7.png';

const achievements = [
    {
        id: 1,
        image: image1,
        text: "MentorShip from Industry Expert",
        detail: "Startups incubated at MMMUT Foundation receive valuable mentorship from industry experts"
    },
    {
        id: 2,
        image: image2,
        text: "Financial Assistance",
        detail: "Collaborated with Startup India Seed Fund and holds Atal Innovation Center status"
    },
    {
        id: 3,
        image: image3,
        text: "Acdemic Support",
        detail: "MMMUT Foundation allows 10% attendance relaxation & enable the students to defer placements by a year or two to start their own ventures."
    },
    {
        id: 4,
        image: image4,
        text: "Networking & Outreach",
        detail: "MMMUT Foundation connect student innovators with diverse professionals, entrepreneurs"
    },
    {
        id: 5,
        image: image5,
        text: "High End Tech Support",
        detail: "We offer comprehensive technical support, fabrication, and lab facilities"
    },
    {
        id: 6,
        image: image6,
        text: "Hands on Learning Experince",
        detail: "Startups collaborate, gain insights from peers, experts in business, technology"
    },
];

const OfferCards = () => {
    return (
        <>
            <div className='offer-heading'>
            What We Offer
            <div className="offercards_horizontal_line"></div>
            </div>
            <div className='container'>
                {achievements.map((achievement) => (
                    <div key={achievement.id} className='card-box'>
                        <article className="offer_card">
                            <header className="offer_card__thumb">
                                <img src={achievement.image} />
                            </header>
                            <div className="offer_card__body">
                                <div className='offer_card__title_box'><h2 className="offer_card__title">{achievement.text}</h2></div>
                                <p className="offer_card__description">{achievement.detail}</p>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </>
    )
}

export default OfferCards