import React from 'react';
import './form.css';

const Form = () => {
    return (
        <>
            <div className='home-form'>
                <div className='home-form-heading'>
                <div className='home-form-heading_txt'>Subscribe to Our Monthly Newsletter</div>
                <div className="homeform_horizontal_line"></div>
                </div>
                <div className='home-form-box'>
                    <form action="https://formspree.io/f/manwnkvj" method="POST">
                        <div className='form-inputfield'>
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        <div className='form-inputfield'>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>


                        {/* <div className='form-inputfield'>
                            <label for="phone">Phone:</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>


                        <div className='form-inputfield'>
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" rows="4" cols="50"></textarea>
                        </div> */}

                        <div className='form-button-submit'>
                            <button type="submit" value="Submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form