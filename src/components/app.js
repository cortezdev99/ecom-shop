import React, { Component } from 'react';

import Header from './headernav/Header'
import Navbar from './headernav/Navbar'

class App extends Component {
  render() {
    return (
      <div className='app'>
        {this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default App