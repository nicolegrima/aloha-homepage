console.log("Start JavaScript Program"); 

// BX SLIDER 

$(function() {
  $('.bxslider').bxSlider(
  	{speed: 200, 
  		controls: false, 
  		auto: true,
  		maxSlides: 4,
  		minSlides: 1,
  		slideMargin: 0
  	});
});


// NEWSLETTER SUBSCRIBE VERIFICATION

$('.sign-up-form').on('submit', function(event) {
   event.preventDefault();

   if ( $('.your-email').val() == '' ) {
      alert('Please add a valid email address.');
   } else {
      alert('Thanks for subscribing!');
   }
});


// SMOOTH SCROLL 

$(function() {
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800); 
        return false;
      }
    }
  });
});

console.log("End JavaScript Program");