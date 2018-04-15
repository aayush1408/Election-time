import React, { Component } from 'react';
import Header from './components/header/index';
import Namo from './components/namo/index';
import Rahul from './components/rahul/index';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col xl12 m12 s12">
            <Header />
          </div>
          <div className="col xl6 l6 m6 s6">
            <Namo />
          </div>
          <div className="col xl6 l6 m6 s6">
            <Rahul />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
