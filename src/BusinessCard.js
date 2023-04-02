import './BusinessCard.css'
import React from "react";
import Draggable from 'react-draggable';

const Home = () => {
    return (
        <>
            <Draggable>
                <div className='about-container'>
                    <div className='about'>
                        <b><i><p className='drag-me'>grab my business card!</p></i></b>
                        <h1>AMANDA CUOMO</h1>
                        <p>Digital Specialist</p>
                        <p>Project Manager</p>
                        <p>cuomoamanda@gmail.com</p>
                    </div>
                </div>
            </Draggable>
        </>

    )
}

export default Home;