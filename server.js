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

// app.post('/equal', function(req,res){
//     console.log(req.body);
//     var nums = req.body.nums;
//     var operator = req.body.operator[0];
//     switch(operator){
//       case '+':
//         toReturn = Number(nums[0]) + Number(nums[1]);
//         break;
//       case '-':
//         toReturn = Number(nums[0]) - Number(nums[1]);
//         break;
//       case 'x':
//         toReturn = Number(nums[0]) * Number(nums[1]);
//         break;
//       case '/':
//         toReturn = Number(nums[0]) / Number(nums[1]);
//     }
//     res.sendStatus(200);
//   });
app.get('/answer', function(req, res){
    toReturn += ' ';
    res.send(toReturn);
});
app.post('/equal', function(req,res){
    console.log(req.body);
    var number1;
    var number2;
    var nums = req.body.nums;
    var operator = req.body.operator;
    for(var i = 0;i<operator.length;i++){
      if(operator[i] == '/'){

        number1 = nums[i];
        number2 = nums[i+1];
        number1 = number1 / number2;
        nums.splice(i,2, number1);
        operator.splice(i,1);   
      }
    }
    for(var i = 0;i<operator.length;i++){
      if(operator[i] == 'x'){
          number1 = nums[i];
          number2 = nums[i+1];
          number1 = number1 * number2;
          nums.splice(i,2, number1);
          operator.splice(i,1);
      }
    }
    for(var i = 0;i<operator.length;i++){
      if(operator[i] == '+'){
          number1 = Number(nums[i]);
          number2 = Number(nums[i+1]);
          number1 = number1 + number2;
          nums.splice(i,2, number1);
          operator.splice(i,1);
      }
    }
    for(var i = 0;i<operator.length;i++){
      if(operator[i] == '-'){
          number1 = Number(nums[i]);
          number2 = Number(nums[i+1]);
          number1 = number1 - number2;
          nums.splice(i,2, number1);
          operator.splice(i,1);
      }
    }
    toReturn = nums.pop();
    res.sendStatus(200);
  });



app.listen(3000);
