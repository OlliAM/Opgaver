const personer = [
  {
    navn: "Mikkel Hansen",
    alder: 28,
    mobilnummer: 12345678
  },
  {
    navn: "Sofie Nielsen",
    alder: 34,
    mobilnummer: 87654321
  },
  {
    navn: "Jonas Larsen",
    alder: 22,
    mobilnummer: 11223344
  },
  {
    navn: "Emma Pedersen",
    alder: 30,
    mobilnummer: 44332211
  }
];

//Løs nedenstående vha. arrays højere ordens metoder.
//Find person med et bestemt mobilnummer.
console.log("Person med tlf 44332211: " + personer.find(element => element.mobilnummer === 44332211).navn)

//Find den mindste alder
function lavesteAlder(min, person) {
    return Math.min(min, person.alder);
}
console.log("\nLaveste alder: " + personer.reduce(lavesteAlder, personer[0].alder))

//Modificer arrayet med personer, så personerne nu får et fortløbende id.
personer.forEach((element, index) => element.id = index)
console.log("\nTilføj ID til personer: ")
personer.forEach((element) => console.log(element))

//Generer en tekststreng, der indeholder personernes navne – kommasepareret og i sorteret rækkefølge.
console.log("\nStreng af alle personer: " + personer
    .map(person => person.navn)
    .sort()
    .reduce((string, navn) => string += ", " + navn), "")

//Generer et array med navn og mobilnummer på de personer, der er yngre end 30.
const personerUnder30 = personer.filter((person) => person.alder < 30)
console.log("\nPersoner under 30: ")
personerUnder30.forEach((person) => console.log(person))