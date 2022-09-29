import React, { useEffect, useState } from 'react';
import './Details.css';
import pic from '../../img/My-img.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb, getSetTime } from '../../utilities/fakedb';
// import { Toast } from 'react-toastify/dist/components';
const Details = (props) => {
    const { details } = props;
    // console.log(details);
    let Time = 0;
    for (const getDetails of details) {
        Time = Time + getDetails.Time;

    }
   const [breakTime,SetBreakTime]=useState([0]);
   useEffect(()=>{
    const storedTime =getSetTime();
    SetBreakTime(storedTime);
   },[breakTime])
  
const newTime=data=>{
    // console.log(data);
    SetBreakTime(data);
    addToDb(data);   
}
  

const addToast=()=>{
    toast.success('Activity Completed',{
        position:'top-center'
    });
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
            <div className='health-details'>
                    <div className='health-info'>
                        <p>55 <small>kg</small></p>
                        <p>weight</p>
                    </div>
                    <div className='health-info'>
                        <p>6</p>
                        <p>Height</p>
                    </div>
                    <div className='health-info'>
                        <p>20 <small>yrs</small></p>
                        <p>Age</p>
                    </div>
                </div>

            <div className='add-breaks'>
                    <h3>Add A Breaks</h3>
                    <div className='add-break-btn'>
                        <button onClick={()=>newTime(10)}>10s</button>
                        <button onClick={()=>newTime(20)}>20s</button>
                        <button onClick={()=>newTime(30)}>30s</button>
                        <button onClick={()=>newTime(40)}>40s</button>
                    </div>

            </div>
            <div className='exercise-details'>
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <p>Exercise Time: <small>{Time} Sec</small></p>
                    <p>Break Time: <small>{breakTime}Sec</small></p>
                </div>
                <div></div>
            </div>
            <div className='activity-complited'>
                <button className='activity-complited-button' onClick={addToast}>Activity Completed</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Details;