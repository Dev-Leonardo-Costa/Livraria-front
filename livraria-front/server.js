const express = require("express");
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8081;

const appName = 'livraria-front';

app.use(express.static( __dirname + `/dist/${appName}`))

app.get('/*', function ( req, res) {
    res.sendFile(path.join( __dirname + `/dist/${appName}/index.html`));
})

app.get('/*',(req, res) => {
    res.sendFile(__dirname + '/dist/livraria-front/index.html');
})

app.listen(PORT, () => {
    console.log('servidor inicio na porta: '+ PORT);
})
