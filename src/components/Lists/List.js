import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
  return (
    <ul>
      {props.listItems.map((item, index) =>{
        return <ListItem key={index} item={item} index={index} deleteItem = {props.deleteItem} />
      })}
      <h1>Total: {props.listItems.length}</h1>
    </ul>
  )
}

export default List
