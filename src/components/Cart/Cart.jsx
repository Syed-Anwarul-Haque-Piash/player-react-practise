import React from 'react';
import Calculate from '../Calculate/Calculate';

const Cart = (props) => {
    console.log(props.cart)
    const cart=props.cart;
    let total=0;
    for(const pl of cart){
      total=total+pl.price;
    }
    return (
        <div>
            <h1>Player Added :{cart.length}</h1>
            {/* {cart.map(pl=><Calculate pl={pl}></Calculate>)} */}
            {cart.map(pl=><h4>{pl.name}</h4>)}
            <p>Total: {total}</p>
            
        </div>
    );
};

export default Cart;