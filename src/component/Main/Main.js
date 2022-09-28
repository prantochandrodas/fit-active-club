import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Details from '../Details/Details';
import './Main.css'
const Main = () => {
    const [carts, setCarts] = useState([]);
    const [details,setDetails]=useState([]);

    useEffect(() => {
        fetch('info.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);
    const handelTimeDetails=(detail)=>{
     
        const newDetails=[...details,detail];
        setDetails(newDetails);
    }
    return (
        <div className='main-container'>
            <div className='select-exercise'>
                <div className='logo'>
                    <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                    <h2>Fit-Active-Club</h2>
                </div>
                <h3>Select today's exercise </h3>
                <div className='selected-exercise-cart'>
                    {
                        carts.map(cart => <Cart
                            cart={cart} 
                            key={cart.id}
                            handelTimeDetails={handelTimeDetails}
                            ></Cart>)
                    }
                </div>
            </div>
            <div className='show-details'>
                <Details
                    details={details}
                ></Details>
            </div>
        </div>
    );
};

export default Main;