// HINTS
//
// The TMDB API returns a "poster_path", which needs to be prepended with "http://image.tmdb.org/t/p/w500/"
// to form the full image URL

$(function() {  // when the page loads
  $("#find-movie").on("click", function(event) {  // listen for "click" event on the find-movie button
    let movieTitle = $("#movie-title").val();
    let url = "http://api.themoviedb.org/3/search/movie?query=" + movieTitle + "&api_key=8ad43d355fccbef40dc3527123bb25ff&language=en-US&page=1&include_adult=false";
    $.get(url, function(data) {
      console.log(data); // have a look at the data

      // make the magic happen
      $(".movies").empty();

      let markup = "";
      for(let i=0; i<4; i++) {
        markup += "<div class='col-3'>";
        markup += "<div class='card'>";
        markup += "<img class='card-img-top' src='http://image.tmdb.org/t/p/w500" + data.results[i].poster_path + "' alt='Card image cap'>";
        markup += "<div class='card-body'>";
        markup += "<h4 class='card-title'>" + data.results[i].title + "</h4>";
        markup += "<p class='card-text'>" + data.results[i].overview + "</p>";
        markup += "<a href='#' class='btn btn-primary'>Go somewhere</a>";
        markup += "</div></div></div>";
      }

      $(".movies").append(markup);

      $(".movies").fadeIn(2000);
    });
  });
});
