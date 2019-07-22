var owl = $('.owl-carousel');

owl.owlCarousel({
  loop:false,
  // stagePadding : 10,
  nav:true,
  margin:15,
  responsive:{
    0 : {
      items : 1
    },
    650:{
      items:2
    },
    800:{
      items:3
    },
    1400:{
      items:4
    },
    1600:{
      items:4
    },
    1700:{
      items:5
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