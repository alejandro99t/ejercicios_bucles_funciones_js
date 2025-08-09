const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  // insert code
  if (!capitals[country]) {
    console.log("The country is not on the list");
  } else {
    console.log(capitals[country]);
  }
}

getCapital("Ireland");
