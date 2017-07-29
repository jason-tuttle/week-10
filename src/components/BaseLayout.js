import React, { Component } from 'react';
import { Nav, NavItem, Navbar, PageHeader} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import '../styles/App.css'

class BaseLayout extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <PageHeader>Fret Board: <small>Frets & Strings</small></PageHeader>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand><NavLink exact to="/" activeStyle={styles.activeNav}>Home</NavLink></Navbar.Brand>
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

const styles = {
  activeNav: {
    borderRadius: '5px 5px 0 0',
    backgroundColor: 'white',
    color: 'blue',
    fontWeight: 'bold'
  },
}

export default BaseLayout;
