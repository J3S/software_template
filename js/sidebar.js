$(document).ready(function(){
  var w = $(window).width();
  if(w < 768){
    $("#sidebar-container").toggleClass("toggled");
  }
  $("#control-sidebar").click(function(e) {
    e.preventDefault();
    $("#sidebar-container").toggleClass("toggled");
  });
  $('#sidebar-items ul').hide();
  $('#sidebar-items ul').children('.current').parent().show();
  $('#sidebar-items li a').click(function() {
    var checkElement = $(this).next();
    if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
      $('#menu ul:visible').slideDown('normal');
      checkElement.slideUp('normal');
      return false;
    }
    if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
      $('#sidebar-items ul:visible').slideUp('normal');
      checkElement.slideDown('normal');
      return false;
    }
  });
  $('.item').click(function(){
    $('.active').toggleClass('active');
    $(this).parent().toggleClass('active');
  });
});
$(window).resize(function(){
  var w = $(window).width();
  if(w === 768){
    $("#sidebar-container").toggleClass("toggled");
  }
});