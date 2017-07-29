import React, { Component } from 'react';
import DisplayItems from './DisplayItems';
import inventory from '../data/inventory';

class Other extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.setState({items: inventory.other});
  }

  render() {
    const {items} = this.state;
    return (
      <div className='body-container'><DisplayItems items={items} /></div>
    );
  }
}

export default Other;
