import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Main.css'
const Main = () => {
    const [carts,setCarts]=useState([]);
    useEffect(()=>{
        fetch('info.json')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])   
    return (
        <div className='main-container'>
            <div className='select-exercise'>
                    <h3>Select today's exercise </h3>
                    <div className='selected-exercise-cart'>
                            {
                                carts.map(cart=><Cart 
                                cart={cart}></Cart>)
                            }
                    </div>
        </div>
            <div className='show-details'>
                    <h1>Show Details</h1>
            </div>
        </div>
    );
};

export default Main;