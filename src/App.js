import React, { Component } from 'react';
import './App.css';
import Ogrenciler from './Components/Ogrenciler';
import Siniflar from './Components/Siniflar';
import Dersler from './Components/Dersler';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ogrenciler />
        <hr />
        <Siniflar />
        <hr />
        <Dersler />
      </div>
    );
  }
}

export default App;