import React, { Component } from 'react';

export default class DisplayItems extends Component {
  render() {
    const {items} = this.props;
    return (
      <div className='stock-container'>
        {items.map((item, index) => {
          return (<div className="item-container" key={index}>
            <img src={item.img} alt={`${item.make},${item.model} ${item.color}`} />
            <p>{item.make} {item.model}</p>
            <p>{item.color}</p>
            <p>${`${item.price}`}</p>
          </div>)
        })}
      </div>
    )
  }
}
