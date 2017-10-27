$(function() {
  $("#do-something").on("click", function(event) {
    event.preventDefault();
    $("h3").html("You clicked the button!");
    $("#unicorn").fadeToggle(2000);
  });
})
