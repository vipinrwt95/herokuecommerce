import React,{useContext} from "react";
import { Button, Container,Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartContext from "../../store/CartContext";
import AddtoCart from "./AddtoCart";
import { Link } from "react-router-dom";
import TokenContext from "../../store/TokenContext";
import ImageHoverZoom from "./ImageHoverZoom";



const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
    
    const Store=(props)=>
    {
      const ctx=useContext(TokenContext);
      const cartx=useContext(CartContext)
      console.log(ctx.isLoggedIn);
      const logoutHandler=()=>
      {
        ctx.logout();
      }
    const addtoCartHandler=(item)=>{
       
         cartx.addItem(item);
    }  
    
return(
    <Container>
      <Button variant="success" onClick={logoutHandler}>LOGOUT</Button>
        <h1 align='center' style={{font:'menu'}}><b>MUSIC</b></h1>
        <Row>
         <Col><h2>ALBUM</h2></Col>
         <Col><h2>PRICE</h2></Col> 
         <Col></Col>
        </Row>
     <div>
        {
         productsArr.map(item=>
         <Row id={item.title}>
         <Col><Link to={item.title}><ImageHoverZoom imagepath={item.imageUrl}width="110" height="110"/></Link></Col>
         <Col>${item.price}</Col><Col><AddtoCart value={item} onClick={addtoCartHandler.bind(null,item)}/></Col> 
         </Row>   )   
        }
        </div>   
        
     </Container>
   )
 }
 export default Store;