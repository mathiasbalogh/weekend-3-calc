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
    var nums = req.body.nums;
    var operator = req.body.operator[0];
    switch(operator){
      case '+':
        toReturn = Number(nums[0]) + Number(nums[1]);
        break;
      case '-':
        toReturn = Number(nums[0]) - Number(nums[1]);
        break;
      case 'x':
        toReturn = Number(nums[0]) * Number(nums[1]);
        break;
      case '/':
        toReturn = Number(nums[0]) / Number(nums[1]);
    }
    res.sendStatus(200);
  });
app.get('/answer', function(req, res){
    toReturn += ' ';
    res.send(toReturn);
});



app.listen(3000);
