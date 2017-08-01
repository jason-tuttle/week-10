import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect} from 'react-redux';
import {AddItem} from '../actions/actionTypes';


class DisplayItems extends Component {
  render() {
    const {items, AddItem} = this.props;
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
              <Button bsStyle='success' onClick={() => AddItem(item)}>Add To Cart</Button>
            </div>
          </div>)
        })}
      </div>
    )
  }
}
export default connect(null, dispatch => bindActionCreators({AddItem}, dispatch))(DisplayItems);
