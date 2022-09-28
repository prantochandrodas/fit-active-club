import React from 'react';
import './Details.css';
const Details = (props) => {
    const {details}=props;
    // console.log(details);
    let Time=0;
    for(const getDetails of details){
       Time=Time+getDetails.Time;
    
    }
    return (
        <div className='details'>
            <div className='personal-info'>
                    
            </div>
            <div className='extra-details'>
                <div className='exercise-time'>
                         <p>Extra Time: <small>{Time}</small></p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Details;