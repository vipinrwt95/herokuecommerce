import React from "react";
const CartContext=React.createContext(
    {
    CartItems:[],
    TotalAmount:0,
    addItem:(item)=>{},
    updateItem:(id)=>{},
    deleteItem:(item)=>{},
    setEmail:(email)=>{}
    }
);
export default CartContext;