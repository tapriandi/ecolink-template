// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("header").style.top = "0";
//   } else {
//     document.getElementById("header").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

AOS.init();

$(document).ready(function(){
  // var docEl = $(document),
  //     headerEl = $('header'),
  //     headerWrapEl = $('.wrapHead'),
  //     navEl = $('nav'),
  //     linkScroll = $('.scroll');
  
  // docEl.on('scroll', function(){
  //   if ( docEl.scrollTop() > 60 ){
  //     headerEl.addClass('fixed-to-top');
  //     headerWrapEl.addClass('fixed-to-top');
  //     navEl.addClass('fixed-to-top');
  //   }
  //   else {
  //     headerEl.removeClass('fixed-to-top');
  //     headerWrapEl.removeClass('fixed-to-top');
  //     navEl.removeClass('fixed-to-top');
  //   }
  // });
  $('.menu a').click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top - 80
      }, 500);
  });
  $(".header-image").click(function(){
    $('html').animate({ scrollTop: 0 }, 1000);
  })
   
});