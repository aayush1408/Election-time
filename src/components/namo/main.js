import React from 'react';
import axios from 'axios';
import ComponentView from './view';
import Button from '../button/index';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: [],
            counter: 0
        };
        this.increment = this.increment.bind(this);
    }
    increment(e) {
        this.setState({ counter: this.state.counter + 1 });
    }
    componentDidMount() {
        axios('/namo').then((res) => {
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
            return (<li key={i}>{tweet}</li>);
        });
    }
    render() {
        return (
            <div>
                {(ComponentView.bind(this))()}
                <ul>
                    {this.getTweets()}
                </ul>
                <Button increment={this.increment} /> {this.state.counter}
            </div>
        );
    }
}
Main.displayName = "Namo-Component";                                                                       