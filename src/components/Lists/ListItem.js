import React, { useState } from 'react'
import "./ListItem.css"

const ListItem = ({item, index, deleteItem, onBuy}) => {
  const [buyAmount ,setBuyAmount] = useState('');

  const buyHandler = () =>{
    const enteredNumber = Number(buyAmount);
    const avaiableQuanity = Number(item.quantity);

    console.log(typeof(avaiableQuanity));
    if(!buyAmount || enteredNumber<= 0 || enteredNumber>avaiableQuanity){
      alert("Invalid quanity entered");
      return;
    }
    onBuy(index, enteredNumber);

    setBuyAmount('');
  }
  return (
      
      <li>
        <p>{item.name} - Rs{item.price} - {item.quantity}kg</p>
        <input type="text" onChange={(e) => setBuyAmount(e.target.value)} value={buyAmount} placeholder="Enter quantity"/>
        <button onClick={buyHandler}>buy</button>
        <button onClick={() =>deleteItem(index)}>delete</button>
      </li>
    
  )
}

export default ListItem
