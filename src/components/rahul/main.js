import React from 'react';
import axios from 'axios';
import ComponentView from './view';
import Button from '../button/index';
import "materialize-css";
import 'materialize-css/dist/css/materialize.min.css';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: [],
            counter: parseInt(localStorage.getItem("rahul")) || 0
        };
        this.increment = this.increment.bind(this);
    }
    increment(e) {
        if (this.state.counter < 10) {
            this.setState({ counter: this.state.counter + 1 });
            localStorage.setItem("rahul", this.state.counter + 1);
        }
        else {
            alert('That\'s the limit');
        }
    }
    componentDidMount() {
        axios('https://server-dunoskazaf.now.sh/namo').then((res) => {
            res.data.map((tweet) => {
                return this.setState({ tweets: [...this.state.tweets, tweet.text] });
            })
        })
            .catch((err) => {
                console.log(err);
            });
    }
    getTweets() {
        return this.state.tweets.map((tweet, i) => {
            return (<li key={i} className="collection-item">{tweet}</li>);
        });
    }
    render() {
        return (
            <div>
                {(ComponentView.bind(this))()}
                <ul className="collection">
                    {this.getTweets()}
                </ul>
                <Button increment={this.increment} /> {this.state.counter}
            </div>
        );
    }
}
Main.displayName = "Rahul-Component";