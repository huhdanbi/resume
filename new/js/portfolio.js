var owl = $('.owl-carousel');

owl.owlCarousel({
  loop:false,
  // stagePadding : 10,
  nav:true,
  margin:5,
  responsive:{
    0:{
      items:1
    },
    480:{
      items:2
    },
    830:{
      items:3
    },
    1050:{
      items:4
    },
    1100:{
      items:2
    },
    1200:{
      items:2
    },
    1201:{
      items:1
    },
    1300:{
      items:2
    },
    1500:{
      items:3
    },
    1800:{
      items:4
    }
  }
});


//firefox
owl.on('DOMMouseScroll','.owl-stage',function(e){
  if (e.originalEvent.detail > 0){ 
      owl.trigger('next.owl');
      } else {
      owl.trigger('prev.owl');
  }
  e.preventDefault();
});

//chrome, ie
owl.on('mousewheel', '.owl-stage', function (e) {
  if (e.originalEvent.wheelDelta > 0) {
      owl.trigger('next.owl');
  } else {
      owl.trigger('prev.owl');
  }
  e.preventDefault();
});