class Movie {
  constructor(title = "", studio = "", rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

// Example of creating an instance of the class Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example usage of getPG method
const moviesList = [
  new Movie("Casino Royale", "Eon Productions", "PG-13"),
  new Movie("Finding Nemo", "Pixar", "G"),
  new Movie("Incredibles 2", "Pixar", "PG"),
  new Movie("The Dark Knight", "Warner Bros.", "PG-13"),
  new Movie("Coco", "Pixar", "PG"),
];

const pgMovies = Movie.getPG(moviesList);
pgMovies.forEach((movie) => console.log(movie.title));
