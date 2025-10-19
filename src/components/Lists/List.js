import React from 'react'
import ListItem from './ListItem'

const List = ({listItems, index, deleteItem, onBuy}) => {
   if (!listItems || listItems.length ===0) {
    return <p>No items to show.</p>;
  }
  return (
    <ul>
      {listItems.map((item, index) =>{
        return <ListItem key={index} item={item} index={index} deleteItem = {deleteItem} onBuy={onBuy}/>
      })}
      <h1>Total: {listItems.length}</h1>
    </ul>
  )
}

export default List
