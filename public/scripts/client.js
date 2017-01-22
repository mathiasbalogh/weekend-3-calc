var nums = [];
var opps = [];

$(function(){
  console.log('Doc Ready');

  $('.operator').click(function(event){
    event.preventDefault();
    var numToPush = $('#output').text();
    var oppToPush = $(this).text();
    nums.push(numToPush);
    opps.push(oppToPush);
    $('#output').text(0);
  });

  $('#equals').click(function(event){
    event.preventDefault();
    var numToPush = $('#output').text();
    nums.push(numToPush);
    equal();
  });

  $('#reset').click(function(){
    $('#output').text(0);
    nums = [];
    opps = [];
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
    integer = $('#output').text();
    integer += $(this).text();
    $('#output').text(integer);
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
}
