const starWarsMovies = [
  { title: "A New Hope", releaseYear: 1977 },
  { title: "The Empire Strikes Back", releaseYear: 1980 },
  { title: "Return of the Jedi", releaseYear: 1983 },
  { title: "The Phantom Menace", releaseYear: 1999 },
  { title: "Attack of the Clones", releaseYear: 2002 },
  { title: "Revenge of the Sith", releaseYear: 2005 },
  { title: "The Force Awakens", releaseYear: 2015 },
  { title: "The Last Jedi", releaseYear: 2017 },
  { title: "The Rise of Skywalker", releaseYear: 2019 },
  { title: "Rogue One", releaseYear: 2016 },
  { title: "Solo", releaseYear: 2018 },
];

let starWarsMoviesBydecade = {};
let moviesDecadeSeventy = [];
let moviesDecadeEighty = [];
let moviesDecadeNinenty = [];
let moviesDecadeTwoThousand = [];

// Añade tu código de bucle aquí
starWarsMovies.forEach((starWarsMovie) => {
  if (starWarsMovie.releaseYear >= 1970 && starWarsMovie.releaseYear < 1980) {
    moviesDecadeSeventy.push(starWarsMovie);
  } else if (
    starWarsMovie.releaseYear >= 1980 &&
    starWarsMovie.releaseYear < 1990
  ) {
    moviesDecadeEighty.push(starWarsMovie);
  } else if (
    starWarsMovie.releaseYear >= 1990 &&
    starWarsMovie.releaseYear < 2000
  ) {
    moviesDecadeNinenty.push(starWarsMovie);
  } else if (starWarsMovie.releaseYear >= 2000) {
    moviesDecadeTwoThousand.push(starWarsMovie);
  }
  starWarsMoviesBydecade["1970s"] = moviesDecadeSeventy;
  starWarsMoviesBydecade["1980s"] = moviesDecadeEighty;
  starWarsMoviesBydecade["1990s"] = moviesDecadeNinenty;
  starWarsMoviesBydecade["2000s"] = moviesDecadeTwoThousand;
});

console.log("StarWars Movies By decade: ", starWarsMoviesBydecade);
