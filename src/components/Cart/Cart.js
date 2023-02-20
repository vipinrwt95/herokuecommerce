import React,{useContext} from 'react';
import { Card, Container,Form,Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartContext from '../../store/CartContext';


const Cart = (props) => {
  
  const ctx=useContext(CartContext);
  
   
  let totalamount=0;
  const amount=ctx.items.map((item=>
    {  
       totalamount=item.price*item.quantity+totalamount;
      
    }))

   
  const purchaseHandler=()=>
  {
    alert('Thanks for purchasing,Will be delivered soon')
    
  }
  const quantityHandler=(item)=>
  {
    ctx.updateItem(item);
  }
  const cartItemRemoveHandler=item=>
  { 
    
  ctx.deleteItem (item);
    
  }
  


  return (
    <section style={{display:'block'}} width="50" >
      <Container>
      <div><h1 align="center">CART</h1><Button className='right'  variant='light' onClick={props.onClose}>X</Button></div>
      <Row>
      <Col xs={3}>ITEM</Col>
      <Col>PRICE</Col>  
      <Col>QUANTITY</Col>
      <Col></Col>
      </Row>
       {<div>{ctx.items.map(item=>
      <Row id={item.title}>
      <Col xs={3}><Image fluid src={item.imageurl} width="50" height="50" />{item.title}</Col>
      <Col>{item.price}</Col>  
      <Col><Form><input type="number" defaultValue={item.quantity} min="1" onChange={quantityHandler.bind(null,item)}></input></Form></Col>
      <Col><Button className='btn-sm' variant='danger' onClick={cartItemRemoveHandler.bind(null,item)}>REMOVE</Button></Col>
      </Row>)}
      </div>}
      <Row>
        <Col></Col>
        <Col><h4>Total Price</h4></Col>
        <Col>${totalamount}</Col>
      </Row>
      <div className="d-grid gap-2">
      {ctx.items.length>0 &&<Button align="center" variant="warning" size="lg" onClick={purchaseHandler}>PURCHASE NOW</Button>}
      </div> 
      </Container>
      </section>
 )
}

export default Cart;

