import React, { Component } from 'react';
import inventory from '../data/inventory';
import DisplayItems from './DisplayItems';



class Electric extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    this.setState({items: inventory.electrics});
  }

  render() {
    const {items} = this.state;
    return (
      <div>
        <DisplayItems items={items}/>
      </div>
    );
  }
}

export default Electric;
