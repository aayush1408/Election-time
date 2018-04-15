import React from 'react';
import axios from 'axios';
import ComponentView from './view';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            tweets: []
        };
    }
    componentDidMount() {
        axios('/rahul').then((res) => {
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
            </div>
        );
    }
}
Main.displayName = "Rahul-Component";