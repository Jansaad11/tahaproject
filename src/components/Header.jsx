import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { IoMdHome } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { MdElectricalServices } from "react-icons/md";
import { FiWatch } from "react-icons/fi";


const Header = () => {
  return (

    <>

      <Navbar bg="dark" data-bs-theme="dark" expand="1g" className='fixed-top'>
        <Container>
          <Navbar.Brand href="#Home"> <FiWatch /> WatchVerve.pk</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home"><IoMdHome /> Home</Nav.Link>
              <Nav.Link href="#Service"> <MdElectricalServices /> Service</Nav.Link>
              <Nav.Link href="#About"> <MdOutlinePermContactCalendar /> About</Nav.Link>
              <Nav.Link href="#Contact"><IoMdContact /> Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

  );
};

export default Header;