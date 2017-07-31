import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    let cartContents = localStorage.getItem('cart');
    if(!cartContents) {
      cartContents = [];
    }
    this.state = {
      cart: cartContents
    };
  }

  render() {
    const cartContents = this.state.cart;
    if (cartContents.length) {
      return (
        <div>Shopping Cart
          
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

export default Cart;
