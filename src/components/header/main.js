import React from 'react';
import ComponentView from './view';

export default class Main extends React.Component {
  render() {
    return (ComponentView.bind(this))();
  }
}
Main.displayName = "Header-Component";
