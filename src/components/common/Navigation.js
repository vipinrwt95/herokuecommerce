import React,{useState,useRef,useContext} from "react"
import   Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Button,Card } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import CartContext from "../../store/CartContext";
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from "react-router-dom";

const Navigation = () => {
   const[Cartstatus,changeCartstatus]=useState(false)
  const ctx=useContext(CartContext);
  const [cartdata,updateCartdata]=useState([]);
  let totalq=0;
  if(ctx.items.length>0)
  {
    ctx.items.map((item=>{
       totalq=item.quantity+totalq;
    }))
    console.log(totalq);
  }
  
  const[target,setTarget]=useState(null)
  const ref=useRef(null);
 const CartHandler=(event)=>
 {
  fetch('https://crudcrud.com/api/4431ca8a840a462f80d795bffbc706da/cartvipinrawatgmailcom').
  then(res=>
    {
      if(res.ok)
      {
        res.json().then(data=>
          {
           updateCartdata(data); 
          
          })
      }
   });
  changeCartstatus((prev)=>!prev);
  setTarget(event.target)
 }
   
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Nav className="me-auto">
      <NavLink to="/home">HOME</NavLink>
      <NavLink to="/store">STORE</NavLink>
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/contact">CONTACT US</NavLink>
      <NavLink to="/login">LOGIN</NavLink>
      </Nav>
          <Button variant="outline-success" onClick={CartHandler}>CART-{totalq}</Button>
          </Container>
      </Navbar>
  <Card bg="secondary">
     <div className="card-body">
     <h1 align="center">The Generics</h1> 
     </div>
  </Card>
  <div ref={ref}>
          <Overlay
        show={Cartstatus}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={10}
        display="block"
      >
        <section style={{backgroundColor:"white"}} id="popover-contained">
          
            <Cart onClose={CartHandler} data={cartdata} ></Cart>
          
        </section>
      </Overlay>
       </div>

    </>
  )
}

export default Navigation;