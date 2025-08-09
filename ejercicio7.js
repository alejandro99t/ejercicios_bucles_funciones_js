const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

let tracksByGenres = {};

// Añade tu código de bucle aquí
tracks.forEach((track) => {
  if (!tracksByGenres[track.genre]) {
    tracksByGenres[track.genre] = [];
  }
  tracksByGenres[track.genre].push(track["title"]);
});

console.log("Tracks By Genres: ", tracksByGenres);
