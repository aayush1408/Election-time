import React, { Component } from 'react';
import ComponentView from './view';

export default class Main extends Component {
  render() {
    return (ComponentView.bind(this))();
  }
}
Main.displayName = "Header-Component";
