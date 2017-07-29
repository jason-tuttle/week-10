import React, { Component } from 'react';
import DisplayItems from './DisplayItems';
import inventory from '../data/inventory';

class Acoustic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    this.setState({items: inventory.acoustics});
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

export default Acoustic;
