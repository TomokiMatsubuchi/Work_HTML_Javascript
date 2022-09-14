$(function () {
  $('.name').change(function(){
    $('.email').css(
      'display', 'block'
    );
  });
  $('.email').change(function(){
    $('.TEL').css(
      'display', 'block'
    );
  });
  $('.TEL').change(function(){
    $('.message').css(
      'display', 'block'
    );
  });
  $('.message').change(function(){
    $('#form_button').css(
      'display', 'block'
    );
  });
})