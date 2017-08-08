//Code for typed.js
  $('document').ready(function(){
    $('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 240
      }, 1000);
      return false;
    }
  }
});

//-------DO NOT ALTER/BURN/DESTROY/MODIFY--------------

//jQuery Code
    $('.navbar-menu').hide();
  $('.ham').on("click",function(){
    $('.navbar-menu').slideToggle();
  });
  $(".typing").typed({
    strings: ["Web Developer/Designer", "Creative Artist", "Writer", "Minimalist"],
    typeSpeed: 100,
    loop: true,
    loopCount: 100
  });
  });
