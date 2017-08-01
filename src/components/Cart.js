import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

const cartContainerStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-around',
  alignContent: 'center',
  width: '90vw',
  padding: '5px 5vw'
}
const cartItemContainerStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-around',
  alignContent: 'center',
  alignItems: 'center',
  height: '20vh',
  padding: '0 10px',
  width: 'calc(100% - 20px)',
  border: '1px solid gray'
}
const cartItemImageStyle = {
  width: '5vw',
  margin: '5px',
  flex: '0 1 auto',
  border: '1px solid gray'
}
const cartItemInfoStyle = {
  flex: '0 1 25%',
  textAlign: 'center',

  lineHeight: '2em',
  fontSize: '1.5em',
  margin: '5px',

}
const cartItemTotalStyle = {
  textAlign: 'right',
  flex: '0 0 calc(100% - 20px)',
  border: '2px solid black',
  fontSize: '2em',
  lineHeight: '2em',
  padding: '0 10px'
}

class Cart extends Component {
  render() {
    const {cartContents, dispatch} = this.props;
    if (cartContents.length) {
      return (
        <div style={cartContainerStyle}>
          <h3>Items In Your Cart:</h3>
          {cartContents.map((item) =>
            <div style={cartItemContainerStyle} key={item.id}>
              <img src={item.img} alt={`${item.make},${item.model}`} style={cartItemImageStyle} />
              <p style={cartItemInfoStyle}>{item.make}</p>
              <p style={cartItemInfoStyle}>{item.model}</p>
              <p style={cartItemInfoStyle} className="item-price">${item.price}</p>
              <p><Button bsStyle="danger" onClick={() => dispatch({type: 'REMOVE_ITEM', item})}>Remove</Button></p>
            </div>
          )}
          <div style={cartItemTotalStyle}>
            Total: $<span className="item-price">{cartContents.reduce((sum, item) => sum + item.price, 0)}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>There's nothing in your cart right now.</h3>
        </div>
      );
    }

  }

}


export default connect(({cart}) => ({cartContents: cart}))(Cart);
