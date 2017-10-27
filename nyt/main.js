$(function() {
  let apiKey = "b605cf2415ced5685c4050b3e1892032:2:54552145"; // don't steal it please
  let url = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data); // have a look at what "data" is in the browser console
    // make the magic
    let markup = "";
    for(let i=0; i<data.results.length; i++) {
      markup += "<div class='col-3'>";
      markup += "<div class='card'>";
      markup += "<img class='card-img-top' src='" + data.results[i].multimedia.src + "' alt='Card image cap'>";
      markup += "<div class='card-body'>";
      markup += "<h4 class='card-title'>" + data.results[i].display_title + "</h4>";
      markup += "<p class='card-text'>" + data.results[i].summary_short + "</p>";
      markup += "<a href='" + data.results[i].link.url + "' class='btn btn-primary'>Read Review</a>";
      markup += "</div></div></div>";
    }
    $(".row").append(markup);
  });
});
