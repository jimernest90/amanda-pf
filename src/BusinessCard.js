import './BusinessCard.css'
import React from "react";
import Draggable, {DraggableCore} from 'react-draggable';

const Home = () => {
        const eventHandler = (e, data) => {
          console.log('Event Type', e.type);
          console.log({e, data});
        }
    return (
        <>
            <Draggable>
                <div className='about-container'>
                    <div className='about'>
                        <b><i><p className='drag-me'>drag me!</p></i></b>
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