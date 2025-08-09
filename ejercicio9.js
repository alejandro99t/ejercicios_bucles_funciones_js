const xMens = [
  { name: "Wolverine", year: 1974 },
  { name: "Cyclops", year: 1963 },
  { name: "Storm", year: 1975 },
  { name: "Phoenix", year: 1963 },
  { name: "Beast", year: 1963 },
  { name: "Gambit", year: 1990 },
  { name: "Nightcrawler", year: 1975 },
  { name: "Magneto", year: 1963 },
  { name: "Professor X", year: 1963 },
  { name: "Mystique", year: 1978 },
];

function findOldestXMen(xMens) {
  // insert code
  let oldestXMen = xMens[0];
  xMens.forEach((xMen) => {
    if (xMen["year"] < oldestXMen["year"]) {
      oldestXMen = xMen;
    }
  });

  console.log("Oldest XMen:", oldestXMen);
}

findOldestXMen(xMens);
