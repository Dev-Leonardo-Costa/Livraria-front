const express = require('express');
const jsonServer = require('json-server');
const app = express();

const PORT = process.env.PORT || 8082;

app.get('/api', jsonServer.router('db.json'))
app.use(express.static( __dirname + `/dist/livraria-front`))

app.get('/*',(req, res) => {
    res.sendFile(__dirname + '/dist/livraria-front/index.html');
});

app.listen(PORT, () => {
    console.log('servidor inicio na porta: '+ PORT);
})