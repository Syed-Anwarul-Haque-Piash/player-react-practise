import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Player from "../Player/Player";
import "./Players.css";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [cart,setCart]=useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  const handleClick=(player,id) => {
    //console.log("Player added",id)
    const addPlayer=cart.find(pl=>pl.id===player.id)
    if(!addPlayer){
      const newCart=[...cart,player]
      setCart(newCart);
    }
    else{
      alert("Player already added")
    }
    
    //console.log("player added",player)
    
}
  return (
    <div className="player-container">
      <div className="players">
        {players.map((player) => (
          <Player player={player} handleClick={handleClick} key={player.id}></Player>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Players;
