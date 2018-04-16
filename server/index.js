const express = require('express');
const request = require('request');
const config = require('./config/config');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://pmtweets12.surge.sh' }));

app.get('/namo', (req, res) => {
    request({
        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=narendramodi&count=5', oauth: config
    }, (err, response, body) => {
        res.json(JSON.parse(body));
        console.log(JSON.parse(body)[0].text);
    });
});

app.get('/rahul', (req, res) => {
    request({
        url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=RahulGandhi&count=5', oauth: config
    }, (err, response, body) => {
        res.json(JSON.parse(body));
        console.log(JSON.parse(body)[0].text);
    });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server runninng at ${port}`);
});