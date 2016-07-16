$(document).ready(function() {
  $("button").click(function() {
    $("html, body").animate({scrollTop: $("#destino").offset().top}, 2000);});
});