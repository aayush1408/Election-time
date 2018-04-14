import React, { Component } from 'react';
import Header from './components/header/index';
import Namo from './components/namo/index';
import Rahul from './components/rahul/index';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Namo />
        <Rahul />
      </div>
    );
  }
}

export default App;
