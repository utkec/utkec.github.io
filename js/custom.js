//Toggles between dark and light mode
function toggleDarkLight() {
  var $body = $("body");
  $body.toggleClass("dark-mode light-mode")
};

//Toggles the text for Light Mode/Dark
$('#mode').on('click', function(){
    $(this).html($(this).html() == 'Light Mode' ? 'Dark Mode' : 'Light Mode');
});

$('.scroll').click(function(){
  $('html body').animate({
scrollTop: $(".contact7").offset().top
}, 800);
});
