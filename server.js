const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const express = require('express');
const config = require('./webpack.config');

const app = express();
const port = 8080;

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/src', 'index.html'));
});

app.listen(port, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:'+port);
});