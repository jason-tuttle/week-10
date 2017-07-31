import React, { Component } from 'react';


export default class DisplayItems extends Component {
  render() {
    const {items} = this.props;
    return (
      <div className='stock-container'>
        {items.map((item, index) => {
          return (<div className="item-container"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: 'bottom center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
              key={index}>
            <div className='item-sub-container'>
              <img src={item.img}
                alt={`${item.make},${item.model} ${item.color}`}
                className="stock-img" />
            </div>
            <div className='item-sub-container' >
              <p className="item-title">{item.make}</p>
              <p className="item-subtitle">{item.model}</p>
              <p>{item.color}</p>
              <p className="item-price">${`${item.price}`}</p>
            </div>
          </div>)
        })}
      </div>
    )
  }
}
