import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart,handelTimeDetails}=props;
     const {img,name,forAge,Time}=cart;
    // console.log(cart);
    // console.log(cart);
  
   
    return (
        <div className='cart'>
          <img src={img} alt="" />
          <div className='cart-info'>
            <h3>{name}</h3>
            <p>For-age: {forAge}</p>
            <p>Time-Required: {Time}</p>
            <button className='cart-button' onClick={()=>props.handelTimeDetails(props.cart)}>
                Add To List
            </button>
          </div>
        </div>
    );
};

export default Cart;