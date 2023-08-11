// API KEY - https://newsapi.org/v2/top-headlines/sources?apiKey=3138c204323b49a3b5366c521084e43f
// CRYPTOCOMPARE API KEY (USING CURRENTLY) ->
// https://cryptopanic.com/api/v1/posts/?auth_token=cead85a4d5370baf8819658d11c86384645d6fd1&public=true

const express = require('express');
const path = require('path');
const app = express();
const port = 5500;

app.get('/', (req,res) => {
    res.sendFile('index.html', { root: path.join(__dirname)});
});

app.listen(port, () => {
    console.log(`I am running at port ${port}`);
});