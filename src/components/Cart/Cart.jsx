import React from 'react';

const Cart = (props) => {
    console.log(props.cart)
    const cart=props.cart;
    return (
        <div>
            <h1>Player Added :{cart.length}</h1>
            {cart.map(player=><h4>{player.name}</h4>)}
            
        </div>
    );
};

export default Cart;