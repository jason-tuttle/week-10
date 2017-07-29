import React, { Component } from 'react';
import { Nav, NavItem, Navbar, PageHeader} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import '../styles/App.css'

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <PageHeader style={
          {
            color: 'white',
            backgroundColor: '#013440',
            margin: 0,
            padding: '50px 20px 20px 20px'
          }
        }>Fret Board: <small>Frets & Strings</small></PageHeader>
        <Navbar inverse style={{margin: '2px 0'}}>
          <Navbar.Header>
            <Navbar.Brand><NavLink exact to="/" >Home</NavLink></Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/acoustic">Acoustic</NavItem>
            <NavItem eventKey={2} href="/electric">Electric</NavItem>
            <NavItem eventKey={3} href="/bass">Bass</NavItem>
            <NavItem eventKey={4} href="/other">Other</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem href="/about">About</NavItem>
            <NavItem href="/contact">Contact</NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
