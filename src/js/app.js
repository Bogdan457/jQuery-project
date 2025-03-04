$(document).ready(function() {
    $('.nav li p').hover(
        function() {
            $(this).css('color', '#273895');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
});

$( "button" ).on( "click", function() {
  $('.question-form').css('display', "block")
});
$( ".question-form form .close" ).on( "click", function() {
  $('.question-form').css('display', "none")
});
$( ".question-form form .message" ).on( "click", function() {
  $('.question-form').css('display', "none")
});
