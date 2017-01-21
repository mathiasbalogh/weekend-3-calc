$(function(){
  console.log('Doc Ready');


  $('.operator').click(function(event){ //this allows only one operator to be highlighted at once
    event.preventDefault();
    if($(this).hasClass('highlighted')){
      $(this).toggleClass('highlighted');
    }else{
      $('.highlighted').removeClass('highlighted');
      $(this).toggleClass('highlighted');
    }
  });

  $('#equals').click(function(event){
    event.preventDefault();
    equal();
  });

  $('#reset').click(function(){
    $('.highlighted').removeClass('highlighted');
    $('#output').text(' ');
  })

});

function equal(){
  var integer1 = $('#a').val();
  var integer2 = $('#b').val();
  var operator = $('#form').find('.highlighted').attr('id');
  $.ajax({
      url: '/equal',
      type: 'POST',
      data: {
        a : integer1,
        b : integer2,
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
}
