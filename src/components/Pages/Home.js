import React from "react";
import { Button, Card } from "react-bootstrap";
import kw from "../../filestoadd/kw.jpg";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {Row,Col} from "react-bootstrap";
import { ModalFooter } from "react-bootstrap";
const Home=()=>
{



 return (
    <>
   <div> 
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
      <Card bg="secondary" style={{ height: "20rem" }}>
     <div className="card-body">
     <div align="center"><h1 align="center" >The Generics</h1> 
     <Button align="center" size="lg" variant="success">Get our Latest Album</Button>
     </div>
    </div>
  </Card>
   <Container>
    <div align='center'></div>
    <h1 align="center">TOURS</h1>
    <Row>
    <Col>JUL16</Col>
    <Col>PAHARGANJ</Col>
    <Col xs={6}>Hari Madhushala</Col>
    <Col><Button size="sm">BUY TICKETS</Button></Col>
   </Row>
   <Row>
    <Col>JUL25</Col>
    <Col>TORONTO</Col>
    <Col xs={6}>BUDWEISER STAGE</Col>
    <Col><Button size="sm">BUY TICKETS</Button></Col>
   </Row>
   <Row>
    <Col>JUL31</Col>
    <Col>PAHARGANJ</Col>
    <Col xs={6}>Hari Madhushala</Col>
    <Col><Button size="sm">BUY TICKETS</Button></Col>
   </Row>
 
    
   </Container>
   </div>
   <Card bg="success"style={{ height: "8rem" }}> 
    <div ><h1>The Generics</h1> 
   </div>
</Card>
</>
)   
}
export default Home; 