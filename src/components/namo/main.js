import React from 'react';
import axios from 'axios';
import ComponentView from './view';

export default class Main extends React.Component {
    componentDidMount() {
        axios('http://localhost:5000/namo').then((res) => {
            console.log(res);
        })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (ComponentView.bind(this))();
    }
}
Main.displayName = "Namo-Component";