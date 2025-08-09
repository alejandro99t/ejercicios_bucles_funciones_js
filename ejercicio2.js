const movies = [
  { title: "The Matrix", releaseYear: 1999 },
  { title: "Star Wars: Episode IV – A New Hope", releaseYear: 1977 },
  { title: "Inception", releaseYear: 2010 },
  { title: "Jurassic Park", releaseYear: 1993 },
  { title: "The Shawshank Redemption", releaseYear: 1994 },
  { title: "Pulp Fiction", releaseYear: 1994 },
  { title: "Avatar", releaseYear: 2009 },
  { title: "The Dark Knight", releaseYear: 2008 },
  { title: "Fight Club", releaseYear: 1999 },
  { title: "Forrest Gump", releaseYear: 1994 },
];

let totalMoviesBeforeYears2000 = 0;

let totalMoviesAfterYears2000 = 0;

// Añade tu código de bucle aquí
movies.forEach((movie) => {
  if (movie.releaseYear < 2000) {
    totalMoviesBeforeYears2000++;
  } else if (movie.releaseYear > 2000) {
    totalMoviesAfterYears2000++;
  }
});

console.log("Total Movies Before Years 2000:", totalMoviesBeforeYears2000);

console.log("\nTotal Movies After Years 2000:", totalMoviesAfterYears2000);
