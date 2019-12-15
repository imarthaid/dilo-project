// import express
let express = require('express');

// inisialisasi app
let app = express();

//setup server port
var port = process.env.port || 8080;

//send message for default URL
app.get('/', (req, res) => (res.send('Hello World with Express')));

//launch app to listen
app.listen(port, function(){
    console.log("Running on port" + port);
})