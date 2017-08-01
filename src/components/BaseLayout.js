import React, { Component } from 'react';
import { Nav, Navbar, PageHeader} from 'react-bootstrap';
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
  constructor(props) {
    super(props);

    this.state = {

    }
  }

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
            <Nav bsStyle='pills'>
              <NavLink to="/acoustic" className="nav-link" activeClassName="nav-link active">Acoustic</NavLink>
              <NavLink to="/electric" className="nav-link" activeClassName="nav-link active">Electric</NavLink>
              <NavLink to="/bass" className="nav-link" activeClassName="nav-link active">Bass</NavLink>
              <NavLink to="/other" className="nav-link" activeClassName="nav-link active">Other</NavLink>
            </Nav>
            <Nav pullRight>
              <NavLink to='/cart' className="nav-link" style={buttonStyle}>My Cart</NavLink>
              <NavLink to="/about" className="nav-link" activeClassName="nav-link active">About</NavLink>
              <NavLink to="/contact" className="nav-link" activeClassName="nav-link active">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
