import React from "react";
import "./style.css";

const images = [
    "/img/homepagepic9.jpg",
    "/img/homepagepic9.jpg",
    "/img/homepagepic9.jpg",
    "/img/homepagepic9.jpg",
    "/img/homepagepic9.jpg",
    "/img/homepagepic9.jpg",
    "/img/homepagepic9.jpg",
    "/img/homepagepic9.jpg"
    
];

function Event() {
    return (
        <div>
            <div className="cont event">
                <div className="cont_title">
                    <h3>EVENTS</h3>
                </div>
                <div className="cont_gallery">
                    {images.map((image, index) => (
                        <div key={index} className="card">
                            <img src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Event;
