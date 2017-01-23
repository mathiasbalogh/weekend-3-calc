var nums = [];
var opps = [];
var equation = '';
$(function(){
  console.log('Doc Ready');

  $('.operator').click(function(event){
    event.preventDefault();
    var numToPush = $('#output').text();
    var oppToPush = $(this).text();
    if(equation == ''){
      equation += numToPush + oppToPush;
      $('#output').text(0);
      nums.push(numToPush);
      opps.push(oppToPush);
    }else{
    nums.push(numToPush);
    opps.push(oppToPush);
    equation += numToPush + oppToPush;
    $('#output').text(0);
    console.log(equation);
    }
  });

  $('#equals').click(function(event){
    event.preventDefault();
    var numToPush = $('#output').text();
    nums.push(numToPush);
    equation.concat(numToPush);
    equal();
  });

  $('#reset').click(function(){
    $('#output').text(0);
    nums = [];
    opps = [];
    equation = '';
  });

  $('.num').click(function(){
    event.preventDefault();
    var integer;
    if($('#output').text() === "0"){
      integer = $(this).attr('id');
      $('#output').text(integer);
    }else{
      integer = $('#output').text();
      integer += $(this).attr('id');
      $('#output').text(integer);
    }
  });

  $('#decimal').click(function(){
    console.log($('#output').text());
    if($('#output').text().includes('.')){

    }else{
      integer = $('#output').text();
      integer += $(this).text();
      $('#output').text(integer);
    }
  });
});

function equal(){
  var number = nums;
  var operator = opps;
  $.ajax({
      url: '/equal',
      type: 'POST',
      data: {
        nums : number,
        operator : operator
      },
      success: getAnswer
    });
}
function getAnswer(){
  $.ajax({
    url: '/answer',
    type: 'GET',
    success: displayAnswer
  });
}
function displayAnswer(toReturn){
  $('#output').text(toReturn);
  nums = [];
  opps = [];
  equation = '';
}
