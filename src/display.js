class displayMovies extends HTMLElement {
  set displayMovieDetails(item) {
    this._displayMovieDetails = item;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this.innerHTML = `
        <div class = "movie-poster">
        <img src = "${
          this._displayMovieDetails.Poster != "N/A"
            ? this._displayMovieDetails.Poster
            : "image_not_found.png"
        }" alt = "movie poster">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">${this._displayMovieDetails.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year">Year: ${this._displayMovieDetails.Year}</li>
            <li class = "rated">Ratings: ${this._displayMovieDetails.Rated}</li>
            <li class = "released">Released: ${
              this._displayMovieDetails.Released
            }</li>
        </ul>
        <p class = "genre"><b>Genre:</b> ${this._displayMovieDetails.Genre}</p>
        <p class = "writer"><b>Writer:</b> ${
          this._displayMovieDetails.Writer
        }</p>
        <p class = "actors"><b>Actors: </b>${
          this._displayMovieDetails.Actors
        }</p>
        <p class = "plot"><b>Plot:</b> ${this._displayMovieDetails.Plot}</p>
        <p class = "language"><b>Language:</b> ${
          this._displayMovieDetails.Language
        }</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${
          this._displayMovieDetails.Awards
        }</p>
    </div>`;
  }
}

customElements.define("display-detail", displayMovies);
