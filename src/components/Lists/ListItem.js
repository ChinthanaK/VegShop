import React from 'react'
import "./ListItem.css"

const ListItem = ({item, index, deleteItem}) => {
  
  return (
    
      <li>
        <p>{item.name} - Rs{item.price} - {item.quantity}kg</p>
        <input type="text" />
        <button>buy</button>
        <button onClick={() =>deleteItem(index)}>delete</button>
      </li>
    
  )
}

export default ListItem
