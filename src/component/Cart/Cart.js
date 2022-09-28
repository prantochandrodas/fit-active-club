import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart}=props;
     const {img,id}=cart;
    // console.log(cart);
    console.log(cart);
   
    return (
        <div className='cart'>
          <img src={img} alt="" />
        </div>
    );
};

export default Cart;