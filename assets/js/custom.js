$(document).ready(function () {
       $("#achieveSlider").owlCarousel({
         loop: true,
         Infinity: true,
         margin: 20,
         center: true,
         nav: false,
         dots: true,
         items: 3,
         responsive: {
           0: {
             items: 1,
           },
           768: {
             items: 3,
           },
         },
       });
     });



     AOS.init();
     