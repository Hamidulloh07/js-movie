let normalizedMovies = [];

let elList = $(".js-movie-list");
let elMovieTemplate = $("#template-element").content;

let createMovieElement = (movie) => {
  let elNewElement = elMovieTemplate.cloneNode(true);

  elNewElement.querySelector(".card-img").src = `http://i3.ytimg.com/vi/${movie.ytid}/hqdefault.jpg`;
  elNewElement.querySelector(".card-img").alt = movie.categories;

  elNewElement.querySelector(".card-title").textContent = movie.fulltitle.split(" ").slice(0, 7).join(" ");
  elNewElement.querySelector(".card-text").textContent = movie.summary.split(" ").slice(0, 17).join(" ");

  return elNewElement;
}

let renderMovie = (movies) => {
  elList.innerHTML = "";

  let elMovieWrapperFragment = document.createDocumentFragment();

  movies.forEach(movie => {
    elMovieWrapperFragment.appendChild(createMovieElement(movie));
    normalizedMovies.push({
      title: movie.Title,
      categories: movie.Categories,
      imageURL: movie.ImageURL,
      
    });
  });
  elList.appendChild(elMovieWrapperFragment);
}

renderMovie(movies);
