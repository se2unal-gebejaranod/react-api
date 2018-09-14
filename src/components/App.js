import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../style/heder.css'

class App extends Component {
  render() {
    return (
      <div className="encabezado">
        <h1 className="titulo">Lista de perros</h1>
      </div>
    );
  }
}

export default App;
