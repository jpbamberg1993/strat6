# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

// $(document).ready(function() {
//   var menuToggle = $('#js-centered-navigation-mobile-menu').unbind();
//   $('#js-centered-navigation-menu').removeClass("show");
  
//   menuToggle.on('click', function(e) {
//     e.preventDefault();
//     $('#js-centered-navigation-menu').slideToggle(function(){
//       if($('#js-centered-navigation-menu').is(':hidden')) {
//         $('#js-centered-navigation-menu').removeAttr('style');
//       }
//     });
//   });
// });

$(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });
});