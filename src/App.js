import React, { Component } from 'react';
import Header from './components/header/index';
import Namo from './components/namo/index';
import Rahul from './components/rahul/index';
import Button from './components/button/index';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Namo />
        <Button />
        <Rahul />
        <Button />
      </div>
    );
  }
}

export default App;
