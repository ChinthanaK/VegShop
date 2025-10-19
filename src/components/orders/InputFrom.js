import React from 'react'

const InputFrom = (props) => {
    const formSubmitHandler = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        const enteredObj = {
            name,
            price,
            quantity
        }
        props.onOrder(enteredObj);
        event.target.reset();
        
    }
  return (
    
   
    <form onSubmit={formSubmitHandler}>
      
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="price">Price:</label>
      <input type="number" name="price" id="price" />
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" name="quantity" id="quantity" />
      <button type="submit">Add To Cart</button>
    </form>
  )
}

export default InputFrom
