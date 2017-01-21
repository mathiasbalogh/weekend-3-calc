var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var toReturn;


var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.post('/equal', function(req,res){
    console.log(req.body);
    var a = Number(req.body.a);
    var b = Number(req.body.b);
    var operator = req.body.operator;
    switch(operator){
      case 'add':
        toReturn = a + b;
        break;
      case 'subtract':
        toReturn = a - b;
        break;
      case 'multiply':
        toReturn = a * b;
        break;
      case 'divide':
        toReturn = a / b;
    }
    res.sendStatus(200);
  });
app.get('/answer', function(req, res){
    toReturn += ' ';
    res.send(toReturn);
});



app.listen(3000);
