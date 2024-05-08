$(document).ready(function(){
    $('#slider-1').owlCarousel({
      nav:true,
      loop:true,
      items:1,
      dots:false,
      navText:['prev','next']
      
    });
  });
  $(document).ready(function(){
    $('#slider-2').owlCarousel({
      nav:true,
      loop:true,
      items:1,
      dots:false,
      navText:['prev','next']
      
    });
  });
  $(document).ready(function(){
    $('#slider-3').owlCarousel({
      nav:true,
      loop:true,
      items:3,
      dots:false,
      navText:['prev','next']
      
    });
  });
  $(document).ready(function(){
    $('#slider-4').owlCarousel({
      // nav:true,
      loop:false,
      items:1,
      dots:true,
      
    });
  });
  $(document).ready(function(){
    $('#slider-5').owlCarousel({
      loop:true,
      items:5,
      dots:false,
      
    });
  });
  $(document).ready(function(){
    $('#slider-6').owlCarousel({
      nav:true,
      loop:true,
      items:3,
      dots:false,
      navText:['prev','next']
      
    });
  });
  $(document).ready(function(){
    $('#slider-7').owlCarousel({
      nav:true,
      loop:true,
      items:4,
      dots:false,
    //   center:true
    });
  });
  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 160) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
  
  
  