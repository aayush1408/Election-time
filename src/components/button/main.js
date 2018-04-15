import React from 'react';
import ComponentView from './view';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            increase: this.props.increment
        };
        this.high = this.high.bind(this);
    }
    high(e) {
        this.state.increase();
    }
    render() {
        return (ComponentView.bind(this))();
    }
}
Main.displayName = "Button-Component";
