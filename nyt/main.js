$(function() {
  let apiKey = "b605cf2415ced5685c4050b3e1892032:2:54552145"; // don't steal it please
  let url = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data); // have a look at what "data" is in the browser console
    // make the magic
  });
});