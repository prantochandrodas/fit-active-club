import React from 'react';
import './Main.css'
const Main = () => {
    return (
        <div className='main-container'>
            <div className='select-exercise'>
                    <h3>Select today's exercise </h3>
                    <div className='selected-exercise-cart'>
                            
                    </div>
            </div>
            <div className='show-details'>
                    <h1>Show Details</h1>
            </div>
        </div>
    );
};

export default Main;