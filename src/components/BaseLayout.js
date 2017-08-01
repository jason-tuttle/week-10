import React, { Component } from 'react';
import {connect} from 'react-redux';
import { PageHeader} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import '../styles/App.css';
import backgroundImg from '../images/guitar-3.jpg';
import Navigation from './Navigation';

const backgroundStyle = {
  background: `no-repeat center url(${backgroundImg})`,
  color: 'white',
  backgroundColor: '#013440',
  margin: 0,
  padding: '50px 20px 20px 20px',
  fontFamily: 'Unlock, serif',
}




class BaseLayout extends Component {

  render() {
    const {cart} = this.props;
    return (
      <div>
        <PageHeader style={backgroundStyle}>Fret Board: <small>Frets & Strings</small></PageHeader>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
