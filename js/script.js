//This piece of javascript code was copied from w3schools website and modified by me
$(document).ready(function () {

    let $reviewsSlick = $('.function-photos-slick');
    if ($reviewsSlick.length > 0) {
      $reviewsSlick.slick({
        'infinite' : true,
        'arrows': false,
        'dots': false,
        'autoplay': true,
        'autoplaySpeed': 4000,
        'adaptiveHeight': false
      });
    }
   
  });