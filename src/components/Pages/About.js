import React from "react";
import { Card } from "react-bootstrap";
import kw from "../../filestoadd/kw.jpg";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const About=()=>
{



 return (
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
      <Card bg="secondary">
     <div className="card-body">
     <h1 align="center">The Generics</h1> 
     </div>
  </Card>
   <Card>
    <Card.Img src={kw} />
    <Card.ImgOverlay>
    <Card.Body>
    <Card.Title align="center">ABOUT</Card.Title>
    <Card.Text> I never said will unfold in him receives at another time he may please 
        the one that those works, we are less than they, this refused to the pleasures 
        of deleniti? Those are! Will unfold in times of pleasure, this pain will be a 
        right enjoyed by corrupt, are accusing him of all pleasu</Card.Text>
        </Card.Body>
        </Card.ImgOverlay>
   </Card>
   </div>
)   
}
export default About; 