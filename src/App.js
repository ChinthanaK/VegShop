import { useState } from "react";
import InputFrom from "./components/orders/InputFrom";
import List from "./components/Lists/List";

function App() {
  const [listItems, setListItems] = useState([]);
  const orderDataHandler =(enteredObj) =>{
    setListItems((prevItems) =>{
      return [
        ...prevItems,
        enteredObj
      ]
    })
  }
 const deleteItemHandler = (index) =>{
 
    const updatedListItems = listItems.filter((item, i) => i !== index);
    setListItems(updatedListItems);
    console.log(updatedListItems);
    console.log(index);
 }

  return (
    <div >
       <h1>VEG SHOP</h1>
      <InputFrom onOrder={orderDataHandler}/>
      <List listItems={listItems} deleteItem = {deleteItemHandler}/>
    </div>
  );
}

export default App;
