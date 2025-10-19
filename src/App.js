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
 }

 const buyItemHandler = (index, amount) =>{
    setListItems((prevItems) =>{
      const updated = prevItems.map((item, i) =>{
        if(i===index){
          const netQuantity  = item.quantity -amount;
          return {...item, quantity : netQuantity}
        }
        return item;
      }).filter((item) => item.quantity>0);
      return updated;
    })
 }

  return (
    <div >
       <h1>VEG SHOP</h1>
      <InputFrom onOrder={orderDataHandler}/>
      <List listItems={listItems} deleteItem = {deleteItemHandler} onBuy={buyItemHandler}/>
    </div>
  );
}

export default App;
