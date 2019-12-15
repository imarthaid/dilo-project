const express = require('express');
const db = require('../db/db');
const bodyParser = require('body-parser');
const port = 3000;

// Setup
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(){
    extended: false
});

app.get('/api/hello/' (req, res) => {
    res.status(200).send({
        success: true,
        message: 'Hello There'
    })
})

app.listen(port, function(){
    console.log('Server ready on http://localshot:' + port);
})