import React, { Component } from 'react';
import '../styles/App.css';

const backgroundStyle = {
  backgroundColor:'#013440'
}

class App extends Component {
  render() {
    return (
      <div className="App" style={backgroundStyle}>
        <p><span className="logo-text">Fret Board</span> is a mock-up of a fictional store front for a fictional company selling instruments with strings and frets.</p>
        <p>Thanks to <a href="http://sweetwater.com">Sweetwater Sound</a> for the images.</p>
      </div>
    );
  }
}

export default App;
