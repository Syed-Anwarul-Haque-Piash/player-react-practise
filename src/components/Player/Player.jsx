import React from 'react';
import './Player.css';

const Player = (props) => {
    const {id,name,img,price,team,category}=props.player;
    const handleClick=props.handleClick;
    return (
        <div className='player'>
            <h1>Name: {name}</h1>
            <img src={img} alt="" />
            <p>Team: {team}</p>
            <p>Price: ${price}</p>
            <p>Category: {category}</p>
            <button onClick={()=>handleClick(props.player)} className='button'>Add To cart</button>
        </div>
    );
};

export default Player;