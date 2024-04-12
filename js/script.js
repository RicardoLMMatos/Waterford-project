//This piece of javascript code was copied from w3schools website and modified by me
$(document).ready(function () {

    let $reviewsSlick = $('.reviews-slick');
    if ($reviewsSlick.length > 0) {
      $reviewsSlick.slick({
        'arrows': false,
        'dots': false,
        'autoplay': true,
        'autoplaySpeed': 3000,
        'adaptiveHeight': true
      });
    }
   
  });