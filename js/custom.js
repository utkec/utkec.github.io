//Toggles between dark and light mode
function toggleDarkLight() {
  var $body = $("body");
  $body.toggleClass("dark-mode light-mode")
};

//Toggles the text for Light Mode/Dark
$('#mode').on('click', function(){
    $(this).html($(this).html() == 'Light Mode' ? 'Dark Mode' : 'Light Mode');
});


$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});
