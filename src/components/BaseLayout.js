import React, { Component } from 'react';
import { Nav, NavItem, Navbar, PageHeader, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import '../styles/App.css';
import backgroundImg from '../images/guitar-3.jpg';

const backgroundStyle = {
  background: `no-repeat center url(${backgroundImg})`,
  color: 'white',
  backgroundColor: '#013440',
  margin: 0,
  padding: '50px 20px 20px 20px',
  fontFamily: 'Unlock, serif',
}

const buttonStyle = {
  backgroundColor: '#5CB85C',
  color: 'white',
  borderRadius: '5px'
}

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <PageHeader style={backgroundStyle}>Fret Board: <small>Frets & Strings</small></PageHeader>
        <Navbar style={{margin: '0'}}>
          <Navbar.Header>
            <Navbar.Brand><NavLink exact to="/" >Home</NavLink></Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/acoustic">Acoustic</NavItem>
              <NavItem eventKey={2} href="/electric">Electric</NavItem>
              <NavItem eventKey={3} href="/bass">Bass</NavItem>
              <NavItem eventKey={4} href="/other">Other</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem href="/cart" style={buttonStyle}>My Cart</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/contact">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
