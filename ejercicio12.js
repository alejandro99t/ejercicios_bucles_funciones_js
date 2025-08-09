const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  const mutantsByPower = mutants.filter((mutant) => mutant.power === power);
  if (mutantsByPower.length >= 1) {
    console.log(
      `There are ${mutantsByPower.length} ${
        mutantsByPower.length === 1 ? "mutant" : "mutants"
      } with ${power} power.`
    );
  } else {
    console.log(`There aren't mutants with ${power} power.`);
  }
}

findMutantByPower(mutants, "telepathy");
