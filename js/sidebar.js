$(document).ready(function(){
  $("#control-sidebar").click(function(e) {
    e.preventDefault();
    $("#sidebar-container").toggleClass("toggled");
  });
});