import CartContext from "./CartContext";
import React,{useState} from "react";
const CartProvider=props=>
{
 const [items,updateItems]=useState([]);
    const addItemToCartHandler=(item)=>
    {
     if(!items.find(i=>i.id===item.id))
     {
       updateItems([...items,item])
     }
     else
     {
       alert('already added') 
     }  
    }
  const updateItemHandler=(item)=>
  { 
    items.forEach((ele)=>
    {
      if(ele.id===item.id)
      {
        ele.quantity+=1;
      }

    }) 
    updateItems([...items])

  }
const deleteItemHandler=(item)=>
   { 
     const newitems=items.filter(i=>i.id!=item.id);   
   updateItems([...newitems]);
}

const setEmailHandler=(email)=>
{
  
}


const cartcontext={
      items:items,
      totalAmount:0,
      addItem:addItemToCartHandler,
      updateItem:updateItemHandler,
      deleteItem:deleteItemHandler,
      
    };

return(
<CartContext.Provider value={cartcontext}>
{props.children} 
</CartContext.Provider>
) 
}
export default CartProvider;