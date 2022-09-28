import React, { useEffect, useState } from 'react';
import './Details.css';
import pic from '../../img/My-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
const Details = (props) => {
    const { details } = props;
    // console.log(details);
    let Time = 0;
    for (const getDetails of details) {
        Time = Time + getDetails.Time;

    }
   const [breakTime,SetBreakTime]=useState([0]);
  
const newTime=data=>{
    // console.log(data);
    SetBreakTime(data);
}
  
    return (
        <div className='details'>
            <div className='personal-info'>
                <img src={pic} alt="" />

                <div className='location'>
                    <h3>Pranto Das</h3>
                    <p>Dhaka,Bangladesh</p>
                </div>
               

            </div>
           
        </div>
    );
};

export default Details;