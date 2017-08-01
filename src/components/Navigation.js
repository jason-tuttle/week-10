import React from 'react';
import {Navbar, Nav, Badge} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const buttonStyle = {
  backgroundColor: '#5CB85C',
  color: 'white',
  borderRadius: '5px'
}

const Navigation = ({cart}) => (<Navbar style={{margin: '0'}}>
  <Navbar.Header>
    <Navbar.Brand><NavLink exact to="/" >Home</NavLink></Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav bsStyle='pills'>
      <NavLink to="/acoustic" className="nav-link" activeClassName="nav-link active">Acoustic</NavLink>
      <NavLink to="/electric" className="nav-link" activeClassName="nav-link active">Electric</NavLink>
      <NavLink to="/bass" className="nav-link" activeClassName="nav-link active">Bass</NavLink>
      <NavLink to="/other" className="nav-link" activeClassName="nav-link active">Other</NavLink>
    </Nav>
    <Nav pullRight>
      <NavLink to='/cart' className="nav-link" style={buttonStyle}>My Cart <Badge>{cart.length}</Badge></NavLink>
      <NavLink to="/about" className="nav-link" activeClassName="nav-link active">About</NavLink>
      <NavLink to="/contact" className="nav-link" activeClassName="nav-link active">Contact</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>);

export default connect(({cart}) => ({cart}))(Navigation);
