import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';


import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import {
  
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge
} from 'mdb-react-ui-kit';

export const Header = (props) => {
  return (
    <>
      <Navbar className="navbar" bg="transparent" variant="light">
        <Container style={{marginLeft:"100px"}}>
          <Navbar.Brand>
            <b><div style={{marginTop:"3px",fontSize:"30px",textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",color:"coral"}}>HYPE</div></b>
          </Navbar.Brand>
          {/* <img
            src="../hypelogo3.jpg"
            style={{ width: '10px',height:"10px" }}
          /> */}
          <Nav style={{marginTop:"15px",marginLeft:"700px"}}>
            <LinkContainer to="/">
              <Nav.Link><h6>Home</h6></Nav.Link>
            </LinkContainer>

            {/* <Nav.Link Link to="/" className='btn btn-danger' id=''>Home</Nav.Link>{" "} */}

            <LinkContainer to="/aboutus">
              <Nav.Link><h6>About</h6></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contactus">
              <Nav.Link><h6>Contact</h6></Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to ='/product'><Nav.Link>Product</Nav.Link></LinkContainer> */}
            <NavDropdown title="Clothing" id="basic-nav-dropdown">
              {/* <NavDropdown.Item><LinkContainer to ='/product'><Nav.Link>Product</Nav.Link></LinkContainer></NavDropdown.Item> */}
              <NavDropdown.Item>
                <LinkContainer to="/product">
                  <Nav.Link>Tops</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/product">
                  <Nav.Link>Bottoms</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item>
                <LinkContainer to="/product">
                  <Nav.Link>Others</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>


        </Container>
      </Navbar>

      

     
    </>
  );
};
