import React,{useState,useRef} from "react";
import { Form,Container, Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";


const Contact=(props)=>
{
  const name=useRef('');
  const email=useRef('');
  const phone=useRef('');



const formSubmitHandler=(event)=>
{
    event.preventDefault();
    const person={
        name:name.current.value,
        email:email.current.value,
        phone:phone.current.value
    };
    console.log(person);
    props.onAddperson(person);
}



return(
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
        </Container>
      </Navbar> 
 <Container>
    <h1 align="center">GET IN TOUCH</h1>
    <Form onSubmit={formSubmitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Your name" ref={name} />
    </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Your email" ref={email}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" placeholder="Your PhoneNo." ref={phone}/>
        <Form.Text className="text-muted">
          We'll never share your details with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>

  </Form>
 </Container>
 </>
    
)


}
export default Contact;