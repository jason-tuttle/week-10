import React, { Component } from 'react';
import backgroundImg from '../images/guitar-3.jpg';
import '../styles/App.css';

const backgroundStyle = {
  backgroundColor:'#013440'
}

class App extends Component {
  render() {
    return (
      <div className="App" style={backgroundStyle}>
        <p>This is the Home page. It will have a description of something really awesome here.</p>
      </div>
    );
  }
}

export default App;
