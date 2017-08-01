import React, { Component } from 'react';
import {connect} from 'react-redux';

const cartContainerStyle = {
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-around',
  alignContent: 'center',
  width: '80vw'
}
const cartItemContainerStyle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-evenly',
  alignContent: 'center',
  height: '20vh',
  width: '100%',
  border: '1px solid gray'
}
const cartItemImageStyle = {
  width: '5vw',
  margin: '5px',
  flex: '1 0 auto'
}
const cartItemInfoStyle = {
  flex: '1 0 25%',
  textAlign: 'center',
  border: '1px solid gray',
  lineHeight: '2em',
  fontSize: '1.5em',
  margin: '5px',
  paddingTop: '2em'
}
const cartItemTotalStyle = {
  textAlign: 'right',
  flex: '0 0 80%',
  border: '2px solid black',
  fontSize: '2em',
  lineHeight: '2em'
}

class Cart extends Component {
  render() {
    const {cartContents} = this.props;
    if (cartContents.length) {
      return (
        <div style={cartContainerStyle}>
          {cartContents.map((item) =>
            <div style={cartItemContainerStyle} key={item.id}>
              <img src={item.img} alt={`${item.make},${item.model}`} style={cartItemImageStyle} />
              <p style={cartItemInfoStyle}>{item.make}</p>
              <p style={cartItemInfoStyle}>{item.model}</p>
              <p style={cartItemInfoStyle} className="item-price">${item.price}</p>
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
